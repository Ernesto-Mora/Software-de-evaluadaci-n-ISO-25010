// backend/routes/evaluacionesRoutes.js

const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const checkRole = require('../middleware/role');
const { getAllEvaluations, createEvaluation, updateEvaluation, deleteEvaluation, updateEvaluationStatus } = require('../controllers/evaluacionesController');

// Obtener todas las evaluaciones
router.get('/', verifyToken, checkRole(['administrador_contenido', 'evaluador']), getAllEvaluations);

// Crear una nueva evaluación
router.post('/', verifyToken, checkRole(['evaluador']), createEvaluation);

// Actualizar una evaluación
router.put('/:id', verifyToken, checkRole(['administrador_contenido']), updateEvaluation);

// Eliminar una evaluación
router.delete('/:id', verifyToken, checkRole(['administrador_contenido']), deleteEvaluation);

// Ruta para cambiar el estado de una evaluación (aceptada/rechazada)
router.patch('/:id/status', updateEvaluationStatus);

module.exports = router;
