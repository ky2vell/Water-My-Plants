import React, { useReducer } from 'react';
import { axiosWithAuth } from '../../api/axiosAuth';
import PlantContext from './plantContext';
import plantReducer from './plantReducer';
import {
  GET_PLANTS,
  ADD_PLANT,
  DELETE_PLANT,
  UPDATE_PLANT,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

const PlantState = props => {
  const initialState = {
    plants: [],
    current: null,
    loading: true
  };

  const [state, dispatch] = useReducer(plantReducer, initialState);

  // Get Plants
  const getPlants = id => {
    axiosWithAuth()
      .get(`/plants/${id}`)
      .then(res =>
        dispatch({
          type: GET_PLANTS,
          payload: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // Add Plant
  const addPlant = plant => {
    axiosWithAuth()
      .post('/plants', plant)
      .then(res =>
        dispatch({
          type: ADD_PLANT,
          payload: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // Delete Plant
  const deletePlant = id => {
    axiosWithAuth()
      .delete(`/plants/${id}`)
      .then(dispatch({ type: DELETE_PLANT, payload: id }))
      .catch(err => console.log(err));
  };

  // Update Plant
  const updatePlant = (id, plant) => {
    axiosWithAuth()
      .put(`/plants/${id}`, plant)
      .then(res => {
        dispatch({ type: UPDATE_PLANT, payload: res.data });
      })
      .catch(err => console.log(err));
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
        loading: state.loading,
        getPlants,
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
