import { USER_LOADED, LOGIN, UPDATE_USER, LOGOUT, LOADING } from '../types';
import jwt from 'jwt-decode';

export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGIN:
      const token = action.payload;
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('user', JSON.stringify(jwt(token)));
      return {
        ...state,
        isAuthenticated: true,
        user: JSON.parse(window.localStorage.getItem('user')),
        loading: false
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: JSON.parse(window.localStorage.getItem('user')),
        loading: false
      };
    case UPDATE_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false
      };
    case LOGOUT:
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('user');
      return {
        isAuthenticated: false,
        user: null,
        loading: false
      };
    default:
      return state;
  }
};
