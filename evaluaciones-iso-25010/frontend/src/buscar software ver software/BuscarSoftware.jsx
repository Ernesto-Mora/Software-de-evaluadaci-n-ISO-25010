import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import windowsIcon from './windows-icon.png';
import linuxIcon from './linux-icon.png';
import adobeIcon from './adobe-icon.png';
import './buscarSoft.css';

export default function BuscarSoftware() {
    return (
        <div className="navbar">
            <div className="navbar-header">
              <h1>Panel de Evaluador</h1>
              <input type="text" placeholder="Ingrese el nombre del software..." className="search-bar" />
            </div>
            <div className="container">
                <div className="sidebar">
                    <ul>
                        <li><Link to="/"><Icon icon="ph:plus-fill"/></Link></li>
                        <li><Link to="/"><Icon icon="material-symbols:home"/></Link></li>
                        <li><Link to="/"><Icon icon="clarity:world-line"/></Link></li>
                        <li><Link to="/"><Icon icon="fluent-mdl2:profile-search"/></Link></li>
                    </ul>
                </div>
                <div className="main-content">
                    <div className='scroll-container'>
                       <div className="card-list">
                            {/* Card 1 */}
                            <div className="card">
                                <div className="card-header">
                                    <img src={windowsIcon} alt="Windows Logo" className="card-icon" />
                                    <h3>Windows 11</h3>
                                    <div className="rating">4.2</div>
                                </div>
                                <p>Nombre del Software: Windows 11<br />
                                    Versión: 23H2<br />
                                    Categoría: Sistema Operativo<br />
                                    Plataforma: Escritorio</p>
                                <button className="view-more-btn">Ver más</button>
                            </div>

                            {/* Card 2 */}
                            <div className="card">
                                <div className="card-header">
                                    <img src={linuxIcon} alt="Linux Logo" className="card-icon" />
                                    <h3>Linux</h3>
                                    <div className="rating">4.2</div>
                                </div>
                                <p>Nombre del Software: Linux<br />
                                    Versión: Debian<br />
                                    Categoría: Sistema Operativo<br />
                                    Plataforma: Escritorio</p>
                                <button className="view-more-btn">Ver más</button>
                            </div>

                            {/* Card 3 */}
                            <div className="card">
                                <div className="card-header">
                                    <img src={adobeIcon} alt="Adobe Reader Logo" className="card-icon" />
                                    <h3>Adobe Acrobat Reader</h3>
                                    <div className="rating">3.5</div>
                                </div>
                                <p>Nombre del Software: Adobe Acrobat Reader<br />
                                    Versión: 16.12.13<br />
                                    Categoría: Software<br />
                                    Plataforma: Escritorio</p>
                                <button className="view-more-btn">Ver más</button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}
