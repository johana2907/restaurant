import React from 'react';
import './Footer.css';

function footer() {
  return (
    <footer className='app-footer'>
      <div className='footer-container'>
        <div className='foo-container'>
            <h4>Teléfono</h4>
            <p>3218354950</p>
        </div>
        <div  className='foo-container'>
            <h4>Ubicación</h4>
            <p>carrera 29 a # 39 sur 20 poblado</p>
        </div>
        <div className='foo-container'>
            <h4>E-mail</h4>
            <p>hamburguesasleo@gmsil.com</p>
        </div>
        </div>
            <h4 className='titulo-final'>
              © <strong>desing | Ingritt Johana Mideros Salazar</strong>
            </h4>
    </footer>
  )
}

export default footer