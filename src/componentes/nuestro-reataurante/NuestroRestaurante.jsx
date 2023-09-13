import React from 'react';
import ImgChef from '../../img/img-nuestro-rest.jpg';
import './Nuestro-restaurante.css';


const NuestroRestaurante = () => {
  return (
  <div className='nuestro-rest-container'>
    <div>
      <img src={ImgChef} alt="imagen del chef" className='imagen-chef' />
    </div>
    <div className='parrafo-container'>
      NOSOTROS
      <br />
      <br />
      Nacimos el 8 de agosto de 2011 en el barrio El Poblado
      de Medellín, gracias al sueño de cuatro amigos emprendedores que pusieron 
      en marcha un proyecto que invitara a ser feliz, compartir y vivir una experiencia 
      diferente entorno a la hamburguesa.
      <br />
      <br />
      Hoy contamos con más de 24 puntos de venta a nivel nacional, 
      atención de eventos y dos modelos móviles que llegan a cada esquina del país.
    </div>
  </div>
  )
};

export default NuestroRestaurante;
