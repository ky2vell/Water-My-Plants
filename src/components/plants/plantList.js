import React, { useState, useEffect } from 'react';
import PlantDetail from './plantDetail';
import { fetchPlants } from '../../api/apiHelpers';
import { useParams } from 'react-router-dom';

const PlantList = () => {
  const [plants, setPlants] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetchPlants(params.userId)
      .then(plants => {
        setPlants(plants);
      })
      .catch(err => {
        console.log(`Plant fetch error: ${err}`);
      });
  }, [params.userId]);

  if (plants) {
    return (
      <div>
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
