import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Context
import AuthContext from '../../context/auth/authContext';

const Navigation = () => {
  const authContext = useContext(AuthContext);
  const { loadUser, isAuthenticated, logout } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <header>
      <div className='sun'>
        <i className='fas fa-sun'></i>
      </div>
      <nav>
        <Link to='/'>Logo Here</Link>
        <ul>
          {isAuthenticated && (
            <>
              <li>
                <Link className='plant-icon' to='/plants'>
                  <i className='fas fa-seedling'></i>My Plants
                </Link>
              </li>
              <li>
                <Link to='/user'>
                  <i className='fas fa-cog'></i>
                  Settings
                </Link>
              </li>
            </>
          )}
          {isAuthenticated ? (
            <li>
              <a href='#!' onClick={logout}>
                <i className='fas fa-sign-out-alt'></i>
                Logout
              </a>
            </li>
          ) : (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
