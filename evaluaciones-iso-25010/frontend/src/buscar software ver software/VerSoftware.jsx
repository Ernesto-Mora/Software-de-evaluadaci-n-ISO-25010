import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import windowsIcon from './windows-icon.png';
import './verSoft.css';

export default function VerSoftware() {
  return (
    <div className='container'>
      <div className="sidebar">
        <ul>
          <li><Link to="/"><Icon icon="ph:plus-fill"/></Link></li>
          <li><Link to="/"><Icon icon="material-symbols:home"/></Link></li>
          <li><Link to="/"><Icon icon="clarity:world-line"/></Link></li>
          <li><Link to="/"><Icon icon="fluent-mdl2:profile-search"/></Link></li>
        </ul>
      </div>
      <div className='go-back-btn'>
        <p><Icon icon="carbon:arrow-left"/>Regresar</p>
      </div>

      <div className='cards'>
      <img src={windowsIcon} alt="Windows Logo" className="card-icon" />
        <div className='card-1'>
          <p>Realizar evaluación</p>
        </div>

        <div className='card-2'>
          <p>Nombre del Software: Windows 11<br />
          Versión: 23H2<br />
          Categoría: Sistema Operativo<br />
          Plataforma: Escritorio</p>
        </div>

        <div className='card-3'>
          <h3>4.2</h3>
          <p>Calificación general de evaluación</p>
        </div>

        <div className='card-4'>
          <ul className='rating-list'>
            <li>
              <h5>4.5</h5>
              <p>Adecuación Funcional</p>
            </li>
            <li>
              <h5>3.9</h5>
              <p>Eficiencia de Desempeño</p>
            </li>
            <li>
              <h5>3.4</h5>
              <p>Compatibilidad</p>
            </li>
            <li>
              <h5>4.2</h5>
              <p>Capacidad de Interacción</p>
            </li>
            <li>
              <h5>5.0</h5>
              <p>Fiabilidad</p>
            </li>
            <li>
              <h5>4.7</h5>
              <p>Seguridad</p>
            </li>
            <li>
              <h5>4.0</h5>
              <p>Mantenibilidad</p>
            </li>
            <li>
              <h5>3.9</h5>
              <p>Flexibilidad</p>
            </li>
            <li>
              <h5>2.0</h5>
              <p>Protección</p>
            </li>
          </ul>
        </div>
        
        <div className='card-5'>
        <Icon icon="entypo:bar-graph"/>
        </div>

        <div className='comment-card'>
          <div className='card-6'>
          <h3>2.9</h3>
          <h4>Ernesto Mora</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.</p>
          </div>
          <div className='card-7'>
          <h3>4.9</h3>
          <h4>Allison Cheves</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.</p>
          </div>
          <div className='card-8'>
          <h3>4.9</h3>
          <h4>Pablo Delgado</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
