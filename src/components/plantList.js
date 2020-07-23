import React, {useContext} from "react";
import PlantDetail from "./plantDetail";
import PlantContext from "../contexts/plantsContext";

const PlantList = () => {
    const plants = useContext(PlantContext);

    return(
        <div>
            {plants.map((plant) => {
                return (
                    <PlantDetail plant={plant}/>
                );
            })}
        </div>
    );
}

export default PlantList;
