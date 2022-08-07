import React, {useContext} from 'react';
import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

const Navigation = () => {
  // Initialize the AuthContext
  const ctx = useContext(AuthContext);
  return (
    //Here we can pull in the isLoggedIn state from the Context in App.js
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
