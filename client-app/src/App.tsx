import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Activities from "./Activity/Activities";

function App() {
  const [activities, setActivities] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: "red" }}>Clien-Side Application</p>
      </header>
    </div>
  );
}

export default App;
