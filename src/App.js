import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { mockUser } from './dummyData'

import UserContext from "./contexts/userContext";

import Navigation from "./components/core/navigation";
import PrivateRoute from "./components/routes/privateRoute";
import PlantPage from "./components/plants/plantPage";
import MarketingPage from "./components/marketing/marketingPage";


function App() {
    const [userInfo, setUserInfo] = useState({});

  return (
      <Router>
          <div>
              <UserContext.Provider value={userInfo}>
                  <Navigation/>
              </UserContext.Provider>

              {localStorage.getItem('token') ? <PrivateRoute component={PlantPage}/> : <Route exact path="/" component={MarketingPage}/>}
          </div>
      </Router>
  );
}

export default App;
