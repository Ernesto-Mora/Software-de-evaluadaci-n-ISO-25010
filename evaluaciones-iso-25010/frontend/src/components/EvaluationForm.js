// /src/components/EvaluationForm.js
import React, { useState } from 'react';
import { createEvaluation } from '../services/api';

const EvaluationForm = () => {
  const [software, setSoftware] = useState('');
  const [preguntas, setPreguntas] = useState([
    { id: 1, texto: 'Pregunta 1: Funcionabilidad', valor: 0 },
    { id: 2, texto: 'Pregunta 2: Eficiencia', valor: 0 },
    { id: 3, texto: 'Pregunta 3: Usabilidad', valor: 0 },
    { id: 4, texto: 'Pregunta 4: Fiabilidad', valor: 0 },
    // Agregar más preguntas según el instrumento
  ]);
  const [comentario, setComentario] = useState('');
  const [estado, setEstado] = useState('temporal'); // Temporal o Final

  const handleSubmit = async (e) => {
    e.preventDefault();
    const respuestasLikert = preguntas.map((pregunta) => ({
      id_pregunta: pregunta.id,
      valor_respuesta: pregunta.valor,
    }));
    const data = {
      id_software: software, // Seleccionar software existente
      estado,
      respuestas_likert: respuestasLikert,
      comentario,
    };
    try {
      await createEvaluation(data);
      alert('Evaluación enviada correctamente');
    } catch (error) {
      console.error('Error al enviar la evaluación:', error);
    }
  };

  const handlePreguntaChange = (id, valor) => {
    setPreguntas(
      preguntas.map((pregunta) =>
        pregunta.id === id ? { ...pregunta, valor } : pregunta
      )
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario de Evaluación - ISO 25010</h2>
      <label>Software a Evaluar:</label>
      <select value={software} onChange={(e) => setSoftware(e.target.value)} required>
        <option value="">Seleccionar Software</option>
        {/* Opciones de software se llenan dinámicamente */}
        <option value="1">Software 1</option>
        <option value="2">Software 2</option>
      </select>

      {preguntas.map((pregunta) => (
        <div key={pregunta.id}>
          <label>{pregunta.texto}</label>
          <input
            type="range"
            min="1"
            max="5"
            value={pregunta.valor}
            onChange={(e) => handlePreguntaChange(pregunta.id, parseInt(e.target.value))}
          />
        </div>
      ))}

      <label>Comentarios:</label>
      <textarea
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        placeholder="Escribe tus comentarios aquí..."
      ></textarea>

      <label>Estado de la Evaluación:</label>
      <select value={estado} onChange={(e) => setEstado(e.target.value)} required>
        <option value="temporal">Temporal</option>
        <option value="final">Final</option>
      </select>

      <button type="submit">Enviar Evaluación</button>
    </form>
  );
};

export default EvaluationForm;
