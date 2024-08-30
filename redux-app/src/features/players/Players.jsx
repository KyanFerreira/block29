// Import the React library
import {useEffect, useState} from "react";

// Import the generated hook from our RTK Query API slice
import { useFetchPlayersQuery } from "../../api/puppyBowlApi";

// Import the CSS styles for this component
import '../../index.css';

// Define a new React component
const Players = () => {
// Use the generated hook to fetch data from the API
// When the component is first rendered, it will start the API fetch
// It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
//const { data = {}, error, isLoading, isSuccess } = useFetchPlayersQuery();
const [players, setPlayers] = useState([]);
const [error, setError] = useState('');


function deletePlayer(id){
// fetch post

}


useEffect(() => {
  

  async function getPlayers(){
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2405-UNF-HY-WEB-PT/players`);
      const { data } = await response.json();
      console.log(data)
      setPlayers(data.players);
    } catch(e){
      setError(e);
    }
   
  }

  getPlayers();
  // if (data) {
  //   console.log(data);
  //   if(Object.keys(data).length){
  //     const temp = JSON.parse(data);
  //     setPlayers(temp.data.players);
  //   }
  // }
}, []);

// Show a loading message while data is being fetched
if (players.length == 0) {
  return <div> Is Loading... </div> 
}

// // Show an error message if the fetch failed
if (error) {
  return <div> Failure! </div> 
}

// Show the fetched data after it has arrived
return (
  <div className="players">
      

      {/* Map through the data array and generate a div for each player */}
      {players.length && players.map((player) => (
        // Use the player's ID as the key for this div
        <div key={player.id} className="player-card">
          
          {/* Display the player's image, with the player's name as alt text */}
          <div className="player-image-container">
            <img className="player-image" src={player.imageUrl} alt={player.name}></img>
          </div>
          <div className="player-details">
            
            <h2> <b>Name: </b> {player.name} </h2> 
            
            <p> <b>Breed: </b> {player.breed} </p> 
            
            <p> <b>Status: </b> {player.status} </p>
            <button>Details</button>
            <button onClick={()=> deletePlayer(player.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
);
};

// Export the component so it can be imported and used in other files
export default Players;
