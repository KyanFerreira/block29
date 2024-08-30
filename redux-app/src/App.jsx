// Import the React library, which allows us to define components
import {useEffect, useState} from "react";

// Import the Players component, which we'll use to show a list of players
import Players from "./features/players/Players"
import PlayerDetail from "./pages/PlayerDetail";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Home from "./pages/Home";

// Define the App component
function App() {
// This component renders the Players component inside a div
// This div has a class of 'App', which we could use for styling
return (
<>
<h1>Puppy Bowl Players</h1>
<div id="container">
<div id="navbar">
    <Link to="/">Home Page</Link>
    <Link to="/add">Add Player</Link>
  </div>
<div>
</div>

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/player/:id" element={<PlayerDetail />} />
        <Route path="/add" element={<Home />} />
      </Routes>
</div>
</>
);
}

// Export the App component as the default export
export default App;
