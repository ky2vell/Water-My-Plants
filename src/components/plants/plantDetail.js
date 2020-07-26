import React, { useContext } from 'react';

// Context
import PlantContext from '../../context/plant/plantContext';

const PlantDetail = ({ plant }) => {
  const plantContext = useContext(PlantContext);
  const { deletePlant, setCurrent, clearCurrent } = plantContext;

  const { id, species, nickname, h2oFrequency } = plant;

  const onDelete = () => {
    deletePlant(id);
    clearCurrent();
  };

  return (
    <div>
      <div>
        <h2>{species}</h2>
        <h3>Common Name: {nickname}</h3>
        <p>Watering Frequency: {h2oFrequency}</p>
        <button onClick={() => setCurrent(plant)}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default PlantDetail;
