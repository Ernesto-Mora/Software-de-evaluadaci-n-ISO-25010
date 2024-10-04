import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

const GraficasEvaluacion = () => {
  const [evaluationData, setEvaluationData] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/evaluations/summary');
      const data = await response.json();
      setEvaluationData(data);
      setComments(data.comments);
    };

    fetchData();
  }, []);

  const chartData = {
    labels: ['Funcionalidad', 'Rendimiento', 'Compatibilidad'],
    datasets: [{
      data: [evaluationData.funcionalidad, evaluationData.rendimiento, evaluationData.compatibilidad],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };

  return (
    <div className="graficas-evaluacion">
      <h2>Gráficas de Evaluación</h2>
      
      <div className="pie-chart">
        <Pie data={chartData} />
      </div>

      <div className="comments-carousel">
        <h3>Comentarios de los Evaluadores</h3>
        <div className="carousel">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              {comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraficasEvaluacion;
