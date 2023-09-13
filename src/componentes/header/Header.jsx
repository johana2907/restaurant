import React from 'react';
import HeaderMenu from '../header-menu/HeaderMenu';
import './Header.css';
import Logo from '../../img/logo-burguer.jpeg';

const Header
 = () => {
  return (
    <header className="app-header">
      <div className='header-container'>
        <div className='logo-container'>
          <img src={Logo} alt="logo del restaurante" className='logo-restaurant'/>
        </div>
        <h1 className='header-title'>
          HAMBURGUESAS LEO
        </h1>
      </div>
      <HeaderMenu /> 
    </header>
  )
};

export default Header;
