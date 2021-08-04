import {
  GET_PLANTS,
  ADD_PLANT,
  DELETE_PLANT,
  UPDATE_PLANT,
  SET_CURRENT,
  CLEAR_CURRENT,
  REFRESH
} from '../types';

const plantReducer = (state, action) => {
  switch (action.type) {
    case GET_PLANTS:
      return {
        ...state,
        plants: action.payload,
        loading: false
      };
    case ADD_PLANT:
      return {
        ...state,
        plants: [action.payload, ...state.plants],
        loading: false,
        refresh: false
      };
    case DELETE_PLANT:
      return {
        ...state,
        plants: state.plants.filter(plant => plant.id !== action.payload),
        loading: false
      };
    case UPDATE_PLANT:
      return {
        ...state,
        plants: state.plants.map(plant =>
          plant.id === action.payload.id ? action.payload : plant
        ),
        refresh: false
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
    case REFRESH:
      return {
        ...state,
        refresh: true
      };
    default:
      return state;
  }
};

export default plantReducer;
