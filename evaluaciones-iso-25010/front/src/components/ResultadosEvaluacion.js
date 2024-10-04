import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const ResultadosEvaluacion = ({ idEvaluacion }) => {
  const [resumen, setResumen] = useState({});
  const [chartData, setChartData] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResultados = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`http://localhost:3000/api/evaluaciones/${idEvaluacion}/resultados`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setResumen(response.data);

        const labels = response.data.respuestas.map(res => res.pregunta);
        const data = response.data.respuestas.map(res => res.valor_respuesta);
        setChartData({
          labels,
          datasets: [{
            label: 'Respuestas Likert',
            data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)'
            ]
          }]
        });
      } catch (err) {
        setError('Error al obtener resultados de la evaluación');
      }
    };
    fetchResultados();
  }, [idEvaluacion]);

  return (
    <div>
      <h2>Resultados de Evaluación</h2>
      {error && <p>{error}</p>}
      <p><strong>Software Evaluado:</strong> {resumen.nombre_software}</p>
      <p><strong>Estado:</strong> {resumen.estado}</p>
      <Pie data={chartData} />
    </div>
  );
};

export default ResultadosEvaluacion;
