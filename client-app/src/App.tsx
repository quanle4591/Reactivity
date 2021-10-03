import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { IActivity } from "./components/app/models/activity";
import Navbar from "./components/app/layout/navbar/Navbar";

function App() {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
        console.log(activities);
      })
      .catch((err) => console.log(err));
  }, []);

  const listActivities = activities.map((act) => <li>{act.title}</li>);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      {listActivities}
    </div>
  );
}

export default App;
