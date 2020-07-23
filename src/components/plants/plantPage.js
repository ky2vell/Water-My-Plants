import React, {useState} from "react";

import PlantContext from "../../contexts/plantsContext";

import PlantList from "./plantList";

import { mockPlants } from "../../dummyData";

const PlantPage = () => {
    const [plants, setPlant] = useState(mockPlants);

    return (
        <div>
            <PlantContext.Provider value={plants}>
                <PlantList />
            </PlantContext.Provider>
        </div>
    );
}

export default PlantPage;
