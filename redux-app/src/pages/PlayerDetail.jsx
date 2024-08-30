import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";

export default function PlayerDetail() {
let { id } = useParams();
console.log(id);
const [player, setPlayer] = useState([]);

async function getPlayer(){
try {
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2405-UNF-HY-WEB-PT/players/${id}`);
  const { data } = await response.json();
  console.log(data);
  console.log(data.player);
  setPlayer(data.player);
} catch(e){
  console.log(e);
}

}

getPlayer();


return (
<div className="PlayerDetail">

<div className="player-image-container">
          <img className="player-image" src={player.imageUrl} alt={player.name}></img>
        </div>
  <div className="player-details">
          
          <h2> <b>Name: </b> {player.name} </h2> 
          
          <p> <b>Breed: </b> {player.breed} </p> 
          
          <p> <b>Status: </b> {player.status} </p>

          <p> <b>Team Id: </b> {player.teamId} </p>
          

        </div>
  
</div>
);
}