import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Context
import PlantState from './context/plant/PlantState';
import AuthState from './context/auth/AuthState';

// Components
import Navigation from './components/core/Navigation';
import PrivateRoute from './components/routes/privateRoute';
import MarketingPage from './components/marketing/MarketingPage';
import PlantList from './components/plants/PlantList';
import Login from './components/core/Login';
import UserForm from './components/core/UserForm';

const App = () => {
  return (
    <AuthState>
      <PlantState>
        <Router>
          <Navigation />
          <main className='container'>
            <Switch>
              <PrivateRoute path='/user' component={UserForm} />
              <PrivateRoute path='/plants' component={PlantList} />
              <Route path='/login' component={Login} />
              <Route path='/' component={MarketingPage} />
            </Switch>
          </main>
        </Router>
      </PlantState>
    </AuthState>
  );
};

export default App;
