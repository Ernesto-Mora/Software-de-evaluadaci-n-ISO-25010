import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardEvaluador = () => {
  const [evaluations, setEvaluations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchEvaluations = async () => {
      const response = await fetch('/api/evaluations/my-evaluations', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setEvaluations(data);
    };

    fetchEvaluations();
  }, [navigate]);

  const handleNewEvaluation = () => {
    navigate('/nueva-evaluacion');
  };

  return (
    <div className="dashboard-evaluador">
      <h2>Panel de Evaluador</h2>
      <h3>Mis Evaluaciones</h3>
      <ul>
        {evaluations.map((evaluation) => (
          <li key={evaluation.id}>{evaluation.software}</li>
        ))}
      </ul>
      <button onClick={handleNewEvaluation}>Registrar Nueva Evaluación</button>
    </div>
  );
};

export default DashboardEvaluador;
