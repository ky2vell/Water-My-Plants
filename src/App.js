import React, { useState } from 'react';
import './App.css';

import { plants as mockPlants } from './plants'

function App() {
  const [plants, setPlant] = useState(mockPlants);

  return <h1>{ plants[0] }</h1>;
}

export default App;
