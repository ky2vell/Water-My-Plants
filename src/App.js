import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/core/navigation';
import PrivateRoute from './components/routes/privateRoute';
import MarketingPage from './components/marketing/marketingPage';
import Login from './components/core/login';

import PlantContext from './contexts/plantsContext';
import PlantList from './components/plants/plantList';

function App() {
  const [userInfo, setUserInfo] = useState([]);

  return (
    <PlantContext.Provider value={{ userInfo, setUserInfo }}>
      <Router>
        <Navigation />
        <Switch>
          <PrivateRoute path='/plantpage/:userId' component={PlantList} />
          <Route path='/login' component={Login} />
          <Route path='/' component={MarketingPage} />
        </Switch>
      </Router>
    </PlantContext.Provider>
  );
}

export default App;
