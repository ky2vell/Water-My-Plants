import React, { useState } from 'react';
import './App.css';

import { mockUser } from './dummyData'

import UserContext from "./contexts/userContext";


function App() {
    const [userInfo, setUserInfo] = useState({});

  return (
      <div>
          <UserContext.Provider value={userInfo}>
              <Navigation/>
          </UserContext.Provider>

          {localStorage.getItem('token') ? <PrivateRoute component={PlantPage}/> : <Route exact path="/" component={MarketingPage}/>}
      </div>
  );
}

export default App;
