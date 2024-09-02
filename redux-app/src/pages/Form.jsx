// Import the React library
import {useEffect, useState} from "react";




// Import the CSS styles for this component
import '../index.css';
import { useNavigate } from "react-router-dom";




// Define a new React component
const Form = () => {
// Use the generated hook to fetch data from the API
// When the component is first rendered, it will start the API fetch
// It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
//const { data = {}, error, isLoading, isSuccess } = useFetchPlayersQuery();
const [players, setPlayers] = useState([]);
const [error, setError] = useState('');
const navigate = useNavigate();


function addPlayer(){

let dogName = document.getElementById("dogName").value;
let breedValue = document.getElementById("dogBreed").value;
let statusValue = document.getElementById("dogStatus").value;
let imageValue = document.getElementById("dogImage").value;


fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2405-UNF-HY-WEB-PT/players/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: dogName,
    breed: breedValue,
    status: statusValue,
    imageUrl: imageValue
  })
})
console.log('Weird');
}


// Show the fetched data after it has arrived
return (
  <div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <h2>Input new Dog</h2>
<form className ="formLayout">
  <label htmlFor="dogName"> Name </label>
  <input type="text" id="dogName" name="dogName"></input>
  <br></br>
  <br></br>
  <label htmlFor="dogBreed"> Breed </label>
  <input type="text" id="dogBreed" name="dogBreed"></input>
  <br></br>
  <br></br>
  <label htmlFor="dogStatus"> Status </label>
  <select id="dogStatus" name="dogStatus">
    <option value="field">Field</option>
    <option value="bench">Bench</option>
  </select>
  <br></br>
  <br></br>
  <label htmlFor="dogImage"> Image </label>
  <input type="text" id="dogImage" name="dogImage"></input>
  <br></br>
  <br></br>
  <button type="button" onClick={()=> addPlayer()}>Add Player</button>
</form>
</div>
);
};

// Export the component so it can be imported and used in other files
export default Form;
