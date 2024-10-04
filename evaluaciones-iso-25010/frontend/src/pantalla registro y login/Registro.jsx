import React, { useState } from 'react';
import './styles.css';

export default function Registro() {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correoEmpresa, setCorreoEmpresa] = useState('');
    const [correoPersonal, setCorreoPersonal] = useState('');
    const [cargo, setCargo] = useState('');
    const [password, setPassword] = useState('');
    
    const buttonOnClick = () => {
      
    }

    return (
        <div className='registro-container'>
            <form>
                <h1>Registrarse</h1>
                <div className='row'>
                    <input 
                        type="text" 
                        className='inputHalf' 
                        placeholder='Nombre' 
                        value={nombre} 
                        onChange={e => setNombre(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        className='inputHalf' 
                        placeholder='Apellido' 
                        value={apellido} 
                        onChange={e => setApellido(e.target.value)} 
                    />
                </div>
                <input 
                    type="text" 
                    placeholder='Correo de empresa' 
                    value={correoEmpresa} 
                    onChange={e => setCorreoEmpresa(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder='Correo personal' 
                    value={correoPersonal} 
                    onChange={e => setCorreoPersonal(e.target.value)} 
                />
                <select value={cargo} onChange={e => setCargo(e.target.value)}>
                    <option value="" disabled>Seleccione su cargo</option>
                    <option value="developer">Desarrollador</option>
                    <option value="designer">Diseñador</option>
                    <option value="manager">Gerente</option>
                </select>
                <input 
                    type="password" 
                    placeholder='Contraseña' 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                />

                <button onClick={buttonOnClick}>Registrar</button>

                <a href="InicioSesion.jsx">¿Ya te registraste? Inicia sesión</a>
            </form>
        </div>
    );
}