import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navigation from './components/core/Navigation';
import PrivateRoute from './components/routes/privateRoute';
import MarketingPage from './components/marketing/MarketingPage';
import PlantList from './components/plants/PlantList';
import Login from './components/core/Login';

// Context
import PlantState from './context/plant/PlantState';

const App = () => {
  const [userInfo, setUserInfo] = useState([]);

  return (
    <PlantState>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/plants' component={PlantList} />
          <Route path='/login' component={Login} />
          <Route path='/' component={MarketingPage} />
        </Switch>
      </Router>
    </PlantState>
  );
};

export default App;
