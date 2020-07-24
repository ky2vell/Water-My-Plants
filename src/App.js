import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from "./components/core/navigation";
import PrivateRoute from "./components/routes/privateRoute";
import MarketingPage from "./components/marketing/marketingPage";

import PlantContext from "./contexts/plantsContext";
import PlantList from "./components/plants/plantList";


function App() {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem('token') ? localStorage.getItem('token') : false;

    }, []);

  return (
      <Router>
          <PlantContext.Provider value={{userInfo, setUserInfo}}>
          <div>
              <Navigation/>

              {userInfo.id ? <PrivateRoute component={PlantList}/> : <Route exact path="/" component={MarketingPage}/>}
          </div>
          </PlantContext.Provider>
      </Router>
  );
}

export default App;
