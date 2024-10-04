import React, { useState } from 'react'

export default function InicioSesion() {

    const [correoPersonal, setCorreoPersonal] = useState('');
    const [password, setPassword] = useState('');

    const buttonOnClick = () => {

    }

  return (
    <div className='login-container'>
        <form>
            <h1>Iniciar Sesión</h1>
            <input 
                type="text" 
                placeholder='Correo personal' 
                value={correoPersonal} 
                onChange={e => setCorreoPersonal(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder='Contraseña' 
                value={password}
                onChange={e => setPassword(e.target.value)} 
            />

            <button onClick={buttonOnClick}>Entrar</button>

            <a href="Registro.jsx">¿No tienes cuenta? Regístrate</a>
        </form>
    </div>
  )
}
