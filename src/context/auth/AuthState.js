import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { axiosWithAuth } from '../../utils/axiosAuth';
import { USER_LOADED, LOGIN, UPDATE_USER, LOGOUT } from '../types';

const AuthState = props => {
  const initialState = {
    isAuthenticated: null,
    loading: true,
    user: JSON.parse(window.localStorage.getItem('user'))
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = () => {
    const token = window.localStorage.getItem('token');

    if (token) {
      dispatch({ type: USER_LOADED });
    }
  };

  // Login User
  const login = formData => {
    axiosWithAuth()
      .post('/login', formData)
      .then(res => {
        dispatch({
          type: LOGIN,
          payload: res.data.token
        });
      })
      .catch(err => console.log(err));
  };

  // Update User
  const updateUser = (id, formData) => {
    axiosWithAuth()
      .put(`/users/${id}`, formData)
      .then(res => {
        dispatch({
          type: UPDATE_USER,
          payload: res.data
        });
      })
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
        updateUser,
        logout,
        loadUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
