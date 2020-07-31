import React, { useContext, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';

// Context
import AuthContext from '../../context/auth/authContext';

const initialValue = {
  username: '',
  password: ''
};

const Login = () => {
  const authContext = useContext(AuthContext);
  const { login, isAuthenticated, loading } = authContext;
  const [values, setValues, handleChanges] = useForm(initialValue);

  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/plants');
    }
  }, [history, isAuthenticated]);

  const handleSubmit = e => {
    e.preventDefault();
    login(values);
    setValues(initialValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='userform' autoComplete='off'>
        <h2>User Login</h2>
        <label>
          Username:
          <input
            name='username'
            value={values.username}
            placeholder='Username'
            type='text'
            onChange={handleChanges}
          />
        </label>
        <label>
          Password:
          <input
            name='password'
            value={values.password}
            placeholder='Password'
            type='text'
            onChange={handleChanges}
          />
        </label>
        <button
          type='submit'
          className={`ld-ext-right ${loading ? 'running' : ''}`}
        >
          <span>Submit</span>
          <div className='ld ld-ring ld-spin'></div>
        </button>
      </form>
    </div>
  );
};

export default Login;
