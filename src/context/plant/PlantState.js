import React, { useReducer } from 'react';
import axios from 'axios';
import PlantContext from './plantContext';
import plantReducer from './plantReducer';
import {
  GET_PLANTS,
  ADD_PLANT,
  DELETE_PLANT,
  UPDATE_PLANT,
  SET_CURRENT,
  CLEAR_CURRENT,
  PLANT_ERROR
} from '../types';

const PlantState = props => {
  const initialState = {
    plants: [
      {
        id: 1,
        nickname: 'shmoo',
        species: 'pooopy',
        h2oFrequency: '3 times a day'
      },
      {
        id: 2,
        nickname: 'shmoo2',
        species: 'pooopy2',
        h2oFrequency: '33 times a day'
      }
    ],
    error: null,
    current: null
  };

  const [state, dispatch] = useReducer(plantReducer, initialState);

  // Get Plants

  // Add Plant
  const addPlant = plant => {
    plant.id = 99;
    dispatch({ type: ADD_PLANT, payload: plant });
  };

  // Delete Plant
  const deletePlant = id => {
    dispatch({ type: DELETE_PLANT, payload: id });
  };

  // Update Plant
  const updatePlant = plant => {
    dispatch({ type: UPDATE_PLANT, payload: plant });
  };

  // Set Current Plant
  const setCurrent = plant => {
    dispatch({ type: SET_CURRENT, payload: plant });
  };

  // Clear Current Plant
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <PlantContext.Provider
      value={{
        plants: state.plants,
        current: state.current,
        addPlant,
        deletePlant,
        setCurrent,
        clearCurrent,
        updatePlant
      }}
    >
      {props.children}
    </PlantContext.Provider>
  );
};

export default PlantState;
