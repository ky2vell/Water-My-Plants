import React from 'react';
import { useForm } from '../../hooks/useForm';

const initialValue = {
  username: '',
  password: ''
};

const Login = () => {
  const [values, setValues, handleChanges] = useForm(initialValue);

  const handleSubmit = e => {
    e.preventDefault();
    setValues(initialValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            name='username'
            value={values.username}
            placeholder='Username'
            type='text'
            onChange={handleChanges}
          />
        </label>
        <label>
          <input
            name='password'
            value={values.password}
            placeholder='Password'
            type='text'
            onChange={handleChanges}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
