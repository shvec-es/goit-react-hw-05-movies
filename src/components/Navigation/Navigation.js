import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={s.link}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.link}>
        Movies
      </NavLink>
      <hr />
    </nav>
  );
}

export default Navigation;
