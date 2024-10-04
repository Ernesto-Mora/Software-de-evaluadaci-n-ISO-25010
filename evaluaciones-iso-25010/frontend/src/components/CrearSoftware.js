import React, { useState } from 'react';
import axios from 'axios';

const CrearSoftware = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleCrearSoftware = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        'http://localhost:3000/api/software',
        { nombre_software: nombre, descripcion },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMensaje('Software creado correctamente');
    } catch (err) {
      setMensaje('Error al crear el software');
    }
  };

  return (
    <div>
      <h2>Crear Software</h2>
      {mensaje && <p>{mensaje}</p>}
      <form onSubmit={handleCrearSoftware}>
        <input
          type="text"
          placeholder="Nombre del Software"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <textarea
          placeholder="Descripción del Software"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button type="submit">Crear Software</button>
      </form>
    </div>
  );
};

export default CrearSoftware;
