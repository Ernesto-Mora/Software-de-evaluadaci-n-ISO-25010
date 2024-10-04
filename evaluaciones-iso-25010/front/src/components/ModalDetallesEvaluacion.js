import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ModalDetallesEvaluacion = ({ idEvaluacion }) => {
  const [detalles, setDetalles] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDetalles = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`http://localhost:3000/api/evaluaciones/${idEvaluacion}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDetalles(response.data);
      } catch (err) {
        setError('Error al obtener detalles de la evaluación');
      }
    };
    fetchDetalles();
  }, [idEvaluacion]);

  return (
    <div>
      <h3>Detalles de Evaluación</h3>
      {error && <p>{error}</p>}
      <p><strong>Software:</strong> {detalles.nombre_software}</p>
      <p><strong>Estado:</strong> {detalles.estado}</p>
      <p><strong>Fecha de Creación:</strong> {detalles.fecha_creacion}</p>
      <p><strong>Preguntas:</strong></p>
      <ul>
        {detalles.respuestas?.map((respuesta) => (
          <li key={respuesta.id_pregunta}>{respuesta.pregunta}: {respuesta.valor_respuesta}</li>
        ))}
      </ul>
    </div>
  );
};

export default ModalDetallesEvaluacion;
