import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './verResultados.css';

export default function VerSoftware() {
  return (
    <div className='navbar'>
        <div className="navbar-header">
            <h1>Resultados</h1>
            <input type="text" placeholder="Ingrese el nombre del software..." className="search-bar" />
        </div>
        <div className="sidebar">
        <ul>
          <li><Link to="/"><Icon icon="ph:plus-fill"/></Link></li>
          <li><Link to="/"><Icon icon="material-symbols:home"/></Link></li>
          <li><Link to="/"><Icon icon="clarity:world-line"/></Link></li>
          <li><Link to="/"><Icon icon="fluent-mdl2:profile-search"/></Link></li>
        </ul>
      </div>
        <div className='card-1'>
            <h3>4.2</h3>
            <p>Calificación general de evaluación</p>
        </div>

        <div className='card-2'>
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

        <div className='btn-abort'>
            <button>Abortar evaluación</button>
        </div>

        <div className='btn-register'>
            <button>Registrar evaluación</button>
        </div>
    </div>
  )
}
