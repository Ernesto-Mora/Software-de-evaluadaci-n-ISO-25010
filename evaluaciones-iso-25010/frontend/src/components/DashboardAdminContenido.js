import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardAdminContenido = () => {
  const [evaluacionesPendientes, setEvaluacionesPendientes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvaluacionesPendientes = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:3000/api/evaluaciones/pendientes', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEvaluacionesPendientes(response.data);
      } catch (err) {
        setError('Error al obtener evaluaciones pendientes');
      }
    };
    fetchEvaluacionesPendientes();
  }, []);

  const handleAceptarEvaluacion = async (idEvaluacion) => {
    const token = localStorage.getItem('token');
    try {
      await axios.put(`http://localhost:3000/api/evaluaciones/${idEvaluacion}/aceptar`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvaluacionesPendientes(evaluacionesPendientes.filter(e => e.id_evaluacion !== idEvaluacion));
    } catch (err) {
      setError('Error al aceptar la evaluación');
    }
  };

  return (
    <div>
      <h2>Evaluaciones Pendientes</h2>
      {error && <p>{error}</p>}
      <ul>
        {evaluacionesPendientes.map((evaluacion) => (
          <li key={evaluacion.id_evaluacion}>
            {evaluacion.nombre_software} - {evaluacion.estado}
            <button onClick={() => handleAceptarEvaluacion(evaluacion.id_evaluacion)}>
              Aceptar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardAdminContenido;
