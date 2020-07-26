import {
  GET_PLANTS,
  ADD_PLANT,
  DELETE_PLANT,
  UPDATE_PLANT,
  SET_CURRENT,
  CLEAR_CURRENT,
  PLANT_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_PLANT:
      return {
        ...state,
        plants: [...state.plants, action.payload]
      };
    case DELETE_PLANT:
      return {
        ...state,
        plants: state.plants.filter(plant => plant.id !== action.payload)
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case UPDATE_PLANT:
      return {
        ...state,
        plants: state.plants.map(plant =>
          plant.id === action.payload.id ? action.payload : plant
        )
      };
    default:
      return state;
  }
};
