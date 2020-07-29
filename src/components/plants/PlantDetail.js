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
    <div className='card'>
      <h3>
        <i className='fas fa-seedling'></i>
        {species}
      </h3>
      <p>Common Name: {nickname}</p>
      <p>Watering Frequency: {h2oFrequency}</p>
      <div className='card-buttons'>
        <button onClick={() => setCurrent(plant)}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default PlantDetail;
