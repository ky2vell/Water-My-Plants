import axios from 'axios';
import { axiosWithAuth } from './axiosAuth';

export const loginCall = credentials => {
  return axios
    .post('https://watermyplants1.herokuapp.com/api/auth/login', credentials)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

export const fetchPlants = userId => {
  return axiosWithAuth()
    .get(`/plants/${userId}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

export const fetchUsers = () => {
  return axiosWithAuth()
    .get('/users')
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};
