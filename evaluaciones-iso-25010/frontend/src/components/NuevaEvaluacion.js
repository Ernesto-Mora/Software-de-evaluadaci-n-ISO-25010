import React, { useState } from 'react';

const NuevaEvaluacion = () => {
  const [softwareName, setSoftwareName] = useState('');
  const [rating, setRating] = useState({});
  const [comments, setComments] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);

  const handleRatingChange = (aspect, value) => {
    setRating({ ...rating, [aspect]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const response = await fetch('/api/evaluations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ softwareName, rating, comments })
    });

    if (response.ok) {
      alert('Evaluación enviada exitosamente');
    } else {
      alert('Error al enviar la evaluación');
    }
  };

  return (
    <div className="nueva-evaluacion">
      <h2>Realizar Nueva Evaluación</h2>
      
      <button onClick={() => setShowInstructions(true)}>Ver Instrucciones</button>
      {showInstructions && (
        <ModalInstructions onClose={() => setShowInstructions(false)} />
      )}
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del software"
          value={softwareName}
          onChange={(e) => setSoftwareName(e.target.value)}
        />

        {/* Preguntas basadas en la norma ISO 25010 */}
        <div>
          <h4>Funcionalidad</h4>
          <select onChange={(e) => handleRatingChange('funcionalidad', e.target.value)}>
            <option value="5">5 - Excelente</option>
            <option value="4">4 - Muy Bueno</option>
            <option value="3">3 - Bueno</option>
            <option value="2">2 - Regular</option>
            <option value="1">1 - Malo</option>
          </select>
        </div>

        <div>
          <h4>Rendimiento</h4>
          <select onChange={(e) => handleRatingChange('rendimiento', e.target.value)}>
            <option value="5">5 - Excelente</option>
            <option value="4">4 - Muy Bueno</option>
            <option value="3">3 - Bueno</option>
            <option value="2">2 - Regular</option>
            <option value="1">1 - Malo</option>
          </select>
        </div>

        {/* Comentarios */}
        <div>
          <h4>Comentarios</h4>
          <textarea
            placeholder="Escribe tu opinión sobre el software..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>

        <button type="submit">Enviar Evaluación</button>
      </form>
    </div>
  );
};

const ModalInstructions = ({ onClose }) => (
  <div className="modal-instructions">
    <h2>Instrucciones para la Evaluación</h2>
    <p>Por favor, califica el software según la norma ISO 25010.</p>
    <button onClick={onClose}>Cerrar</button>
  </div>
);

export default NuevaEvaluacion;
