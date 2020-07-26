import React, { useContext, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';

// Context
import AuthContext from '../../context/auth/authContext';

const initialValue = {
  username: '',
  password: ''
};

const Login = props => {
  const authContext = useContext(AuthContext);
  const { login, isAuthenticated } = authContext;
  const [values, setValues, handleChanges] = useForm(initialValue);

  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/plants');
    }
  }, [isAuthenticated]);

  const handleSubmit = e => {
    e.preventDefault();
    login(values);
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
