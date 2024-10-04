import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ModalPreguntasLikert = ({ idEvaluacion }) => {
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPreguntas = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/preguntas');
        setPreguntas(response.data);
      } catch (err) {
        setError('Error al obtener preguntas');
      }
    };
    fetchPreguntas();
  }, []);

  const handleResponder = (idPregunta, valor) => {
    setRespuestas({ ...respuestas, [idPregunta]: valor });
  };

  const handleEnviarRespuestas = async () => {
    const token = localStorage.getItem('token');
    try {
      await Promise.all(preguntas.map(async (pregunta) => {
        const valorRespuesta = respuestas[pregunta.id_pregunta];
        if (valorRespuesta) {
          await axios.post('http://localhost:3000/api/likert/respuesta', {
            id_evaluacion: idEvaluacion,
            id_pregunta: pregunta.id_pregunta,
            valor_respuesta: valorRespuesta,
          }, {
            headers: { Authorization: `Bearer ${token}` },
          });
        }
      }));
      window.location.href = `/resultados/${idEvaluacion}`;
    } catch (err) {
      setError('Error al enviar respuestas');
    }
  };

  return (
    <div>
      <h3>Responde las siguientes preguntas</h3>
      {error && <p>{error}</p>}
      {preguntas.map((pregunta) => (
        <div key={pregunta.id_pregunta}>
          <p>{pregunta.pregunta}</p>
          {[1, 2, 3, 4, 5].map((valor) => (
            <label key={valor}>
              <input
                type="radio"
                name={`pregunta_${pregunta.id_pregunta}`}
                value={valor}
                onChange={() => handleResponder(pregunta.id_pregunta, valor)}
              />
              {valor}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleEnviarRespuestas}>Enviar Respuestas</button>
    </div>
  );
};

export default ModalPreguntasLikert;
