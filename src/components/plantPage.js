import React from "react";

import UserContext from "../contexts/userContext";
import PlantContext from "../contexts/plantsContext";

import PlantList from "./plantList";

const PlantPage = () => {

    return (
        <div>
            <UserContext.Provider value={userInfo}>
                <Navigation/>
            </UserContext.Provider>

            <PlantContext.Provider value={plants}>
                <PlantList />
            </PlantContext.Provider>
        </div>
    );
}

export default PlantPage;
