// backend/controllers/evaluacionesController.js

const Evaluacion = require('../models/evaluaciones');

// Obtener todas las evaluaciones
const getEvaluaciones = async (req, res) => {
    try {
        const evaluaciones = await Evaluacion.getAllEvaluaciones();
        res.status(200).json(evaluaciones);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener las evaluaciones' });
    }
};

// Crear una nueva evaluación
const createEvaluacion = async (req, res) => {
    const { id_software, id_evaluador, estado } = req.body;

    try {
        const evaluacion = await Evaluacion.createEvaluacion(id_software, id_evaluador, estado);
        res.status(201).json(evaluacion);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear la evaluación' });
    }
};

// Actualizar una evaluación
const updateEvaluacion = async (req, res) => {
    const { id_evaluacion } = req.params;
    const { estado, fecha_envio } = req.body;

    try {
        const evaluacion = await Evaluacion.updateEvaluacion(id_evaluacion, estado, fecha_envio);
        res.status(200).json(evaluacion);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar la evaluación' });
    }
};

// Eliminar una evaluación
const deleteEvaluacion = async (req, res) => {
    const { id_evaluacion } = req.params;

    try {
        await Evaluacion.deleteEvaluacion(id_evaluacion);
        res.status(200).json({ message: 'Evaluación eliminada' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar la evaluación' });
    }
};

module.exports = {
    getEvaluaciones,
    createEvaluacion,
    updateEvaluacion,
    deleteEvaluacion
};
