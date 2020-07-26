import { USER_LOADED, LOGIN, LOGOUT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN:
      window.localStorage.setItem('token', action.payload.token);
      window.localStorage.setItem('user_id', action.payload.id);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case USER_LOADED:
      let id = window.localStorage.getItem('user_id');
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload.find(user => user.id !== id)
      };
    case LOGOUT:
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('user_id');
      return {
        isAuthenticated: false,
        loading: false,
        user: null
      };
    default:
      return state;
  }
};
