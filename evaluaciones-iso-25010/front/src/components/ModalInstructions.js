import React from 'react';

const ModalInstructions = ({ onClose }) => (
  <div className="modal-instructions">
    <h2>Instrucciones para la Evaluación</h2>
    <p>Por favor, califica el software siguiendo la normativa ISO 25010. Asegúrate de revisar cada aspecto y dar un comentario si es necesario.</p>
    <button onClick={onClose}>Cerrar</button>
  </div>
);

export default ModalInstructions;
