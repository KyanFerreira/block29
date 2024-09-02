// Import the React library
import { useEffect, useState } from "react";

// Import the CSS styles for this component
import "../index.css";
import { useNavigate } from "react-router-dom";

// Define a new React component
const Searchbar = () => {
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  //const { data = {}, error, isLoading, isSuccess } = useFetchPlayersQuery();
  const [players, setPlayers] = useState([]);
  let moveList = [];
  let [neededList, setNeededList] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlayers() {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2405-UNF-HY-WEB-PT/players`
        );
        const { data } = await response.json();
        console.log(data.players);
        setPlayers(data.players);
      } catch (e) {
        setError(e);
      }
    }

    getPlayers();
  }, []);

  function createList() {
    let searchName = document.getElementById("searchName").value;
    console.log(players);
    players.forEach((dog) => {
      if (dog.name.toLowerCase() == searchName.toLowerCase()) {
        console.log(dog.name);
        moveList.push(dog);
      }
    });
    setNeededList(moveList);
    console.log(neededList);
  }

  // Show the fetched data after it has arrived
  return (
    
    <div>
       <form className="formLayout">
          <label htmlFor="searchName"> Name </label>
          <input type="text" id="searchName" name="searchName"></input>
          <button type="button" onClick={() => createList()}>
            Search
          </button>
        </form>

        <div className="players">
          {/* Map through the data array and generate a div for each player */}
          {
            neededList.map((player) => (
              // Use the player's ID as the key for this div
              <div key={player.id} className="player-card">
                {/* Display the player's image, with the player's name as alt text */}
                <div className="player-image-container">
                  <img
                    className="player-image"
                    src={player.imageUrl}
                    alt={player.name}
                  ></img>
                </div>
                <div className="player-details">
                  <h2>
                    <b>Name: </b> {player.name}{" "}
                  </h2>

                  <p>
                    <b>Breed: </b> {player.breed}{" "}
                  </p>

                  <p>
                    <b>Status: </b> {player.status}{" "}
                  </p>
                </div>
              </div>
            ))}
        
      </div>
    </div>
  );
};

// Export the component so it can be imported and used in other files
export default Searchbar;
