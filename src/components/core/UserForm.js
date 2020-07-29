import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';

// Context
import AuthContext from '../../context/auth/authContext';

const user = JSON.parse(window.localStorage.getItem('user'));

const initialValue = {
  username: user ? user.username : '',
  password: '',
  phoneNumber: ''
};

const UserForm = () => {
  const authContext = useContext(AuthContext);
  const { user, updateUser } = authContext;

  const [values, setValues, handleChanges] = useForm(initialValue);

  const handleSubmit = e => {
    e.preventDefault();
    updateUser(user.userId, values);
    setValues(initialValue);
  };

  return (
    <form onSubmit={handleSubmit} className='userform'>
      <h2>Update User Info</h2>
      <label>
        New Password:
        <input
          name='password'
          value={values.password}
          placeholder='New Password..'
          type='password'
          onChange={handleChanges}
          minLength='2'
          required
        />
      </label>
      <label>
        New Phone Number:
        <input
          name='phoneNumber'
          value={values.phoneNumber}
          placeholder='Phone Number..'
          type='text'
          onChange={handleChanges}
          required
        />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default UserForm;
