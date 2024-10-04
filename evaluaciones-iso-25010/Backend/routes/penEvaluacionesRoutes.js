// /backend/routes/penEvaluacionesRoutes.js
const express = require('express');
const router = express.Router();
const { getAllPenEvaluaiones, updatePenEvaluacionesStatus } = require('../controllers/penEvaluacionesController.js');

// Obtener todas las evaluaciones pendientes
router.get('/', getAllPenEvaluaiones);

// Actualizar estado de evaluación pendiente
router.patch('/:id', updatePenEvaluacionesStatus);

module.exports = router;
