import React from 'react';
import { NavLink } from 'react-router-dom';
import './header-menu.css';


const HeaderMenu = () => {
  return (
    <nav>
      <ul className='menu-list'> 
        <li>
          <NavLink to='/' className='menu-link'>
            Nuestro Restaurante
          </NavLink>
        </li>
        <li>
          <NavLink to='/reservas' className='menu-link'>
            Reservas
          </NavLink>
        </li>
        <li>
          <NavLink to='/carta' className='menu-link'>
            Carta
          </NavLink>
        </li>
      </ul> 
    </nav>

  )
};

export default HeaderMenu;
