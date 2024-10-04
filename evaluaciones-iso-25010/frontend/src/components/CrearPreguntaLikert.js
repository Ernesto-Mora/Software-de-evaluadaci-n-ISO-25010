import React, { useState } from 'react';
import axios from 'axios';
import './app.css';

const CrearPreguntaLikert = () => {
  const [pregunta, setPregunta] = useState('');
  const [caracteristica, setCaracteristica] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleCrearPregunta = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/likert/preguntas', {
        pregunta,
        id_caracteristica_ISO25010: caracteristica,
      });
      setMensaje('Pregunta creada correctamente');
    } catch (err) {
      setMensaje('Error al crear la pregunta');
    }
  };

  return (
    <div>
      <h2>Crear Pregunta Likert</h2>
      {mensaje && <p>{mensaje}</p>}
      <form onSubmit={handleCrearPregunta}>
        <input
          type="text"
          placeholder="Pregunta"
          value={pregunta}
          onChange={(e) => setPregunta(e.target.value)}
        />
        <input
          type="text"
          placeholder="ID Característica ISO 25010"
          value={caracteristica}
          onChange={(e) => setCaracteristica(e.target.value)}
        />
        <button type="submit">Crear Pregunta</button>
      </form>
    </div>
  );
};

export default CrearPreguntaLikert;
