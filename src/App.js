import React, { useState } from 'react';
import './App.css';

import { dummyData as mockPlants } from './dummyData'

import PlantContext from "./contexts/plantsContext";

import PlantList from "./components/plantList";
import UserContext from "./contexts/userContext";



function App() {
    const [userInfo, setUserInfo] = useState({});
    const [plants, setPlant] = useState(mockPlants);

  return (
      <div>
          {localStorage.getItem('token') ? <PrivateRoute component={PlantPage}/> : <Route exact path="/" component={Login}/>}
      </div>
  );
}

export default App;
