import React, { useState, useContext, useEffect } from 'react';

// Context
import PlantContext from '../../context/plant/plantContext';
import AuthContext from '../../context/auth/authContext';

// Components
import PlantDetail from './PlantDetail';
import PlantForm from './PlantForm';

const PlantList = () => {
  const [plantId, setPlantId] = useState();

  const plantContext = useContext(PlantContext);
  const authContext = useContext(AuthContext);

  const { plants, getPlants } = plantContext;
  const { loading } = authContext;

  let id = window.localStorage.getItem('user_id');

  useEffect(() => {
    getPlants(id);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <PlantForm plantId={plantId} />
      {loading ? (
        <h2>Plants are loading...</h2>
      ) : (
        plants.map(plant => (
          <PlantDetail plant={plant} key={plant.id} setPlantId={setPlantId} />
        ))
      )}
    </div>
  );
};

export default PlantList;
