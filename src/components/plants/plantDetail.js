import React from 'react';

const PlantDetail = props => {
  return (
    <div>
      <div>
        <h2>{props.plant.species}</h2>
        <h3>Common Name: {props.plant.nickname}</h3>
        <p>Watering Frequency: {props.plant.h2oFrequency}</p>
      </div>
    </div>
  );
};

export default PlantDetail;
