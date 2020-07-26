import React, { useContext } from 'react';

// Context
import PlantContext from '../../context/plant/plantContext';

// Components
import PlantDetail from './PlantDetail';
import PlantForm from './PlantForm';

const PlantList = () => {
  const plantContext = useContext(PlantContext);

  const { plants } = plantContext;

  if (plants) {
    return (
      <div>
        <PlantForm />
        {plants.map(plant => {
          return <PlantDetail plant={plant} key={plant.id} />;
        })}
      </div>
    );
  } else {
    return <div>Loading ...</div>;
  }
};

export default PlantList;
