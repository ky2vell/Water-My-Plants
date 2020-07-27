import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import { axiosWithAuth } from '../../api/axiosAuth';
import { USER_LOADED, LOGIN, LOGOUT } from '../types';

const AuthState = props => {
  const initialState = {
    isAuthenticated: null,
    loading: true,
    user: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = () => {
    const token = window.localStorage.getItem('token');

    if (token) {
      axios
        .get(`https://watermyplants1.herokuapp.com/api/auth/users`)
        .then(res =>
          dispatch({
            type: USER_LOADED,
            payload: res.data
          })
        )
        .catch(err => console.log(err));
    }
  };

  // Login User
  const login = formData => {
    axiosWithAuth()
      .post('/login', formData)
      .then(res =>
        dispatch({
          type: LOGIN,
          payload: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        login,
        logout,
        loadUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
