import React, { useContext, useEffect } from 'react';

// Context
import PlantContext from '../../context/plant/plantContext';
import AuthContext from '../../context/auth/authContext';

// Components
import PlantDetail from './PlantDetail';
import PlantForm from './PlantForm';

const PlantList = () => {
  const plantContext = useContext(PlantContext);
  const authContext = useContext(AuthContext);

  const { plants, getPlants } = plantContext;
  const { loading, user } = authContext;

  useEffect(() => {
    getPlants(user.userId);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <PlantForm />
      {loading ? (
        <h2>Plants are loading...</h2>
      ) : (
        plants.map(plant => <PlantDetail plant={plant} key={plant.id} />)
      )}
    </div>
  );
};

export default PlantList;
