import React from 'react';
import { useForm } from '../../hooks/useForm';
import { loginCall } from '../../api/apiHelpers';

const initialValue = {
  username: '',
  password: ''
};

function Login(props) {
  const [values, handleChanges] = useForm(initialValue);

  function handleSubmit(event) {
    event.preventDefault();

    loginCall(values)
      .then(data => {
        window.localStorage.setItem('token', data.token);
        props.history.push(`/plantpage/${data.id}`);
      })
      .catch(err => {
        console.log(`Login error: ${err}`);
      });
  }

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
}

export default Login;
