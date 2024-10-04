// /src/components/SoftwareForm.js
import React, { useState } from 'react';
import { createSoftware } from '../services/api';

const SoftwareForm = () => {
  const [nombreSoftware, setNombreSoftware] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createSoftware({ nombre_software: nombreSoftware, descripcion });
      console.log('Software creado');
    } catch (error) {
      console.error('Error creando software:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del software"
        value={nombreSoftware}
        onChange={(e) => setNombreSoftware(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción del software"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />
      <button type="submit">Crear software</button>
    </form>
  );
};

export default SoftwareForm;
