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
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {isAuthenticated ? (
          <li>
            <a href='#!' onClick={logout}>
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
  );
};

export default Navigation;
