import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';

// Context
import AuthContext from '../../context/auth/authContext';

const user = JSON.parse(window.localStorage.getItem('user'));

const initialValue = {
  username: user.username,
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
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Update User Information</h2>
        <label>
          New Password:
          <input
            name='password'
            value={values.password}
            placeholder=' New Password..'
            type='text'
            onChange={handleChanges}
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
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
