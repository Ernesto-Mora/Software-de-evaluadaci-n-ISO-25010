// backend/routes/evaluacionesRoutes.js

const express = require('express');
const router = express.Router();
const evaluacionesController = require('../controllers/evaluacionesController');

// Rutas para evaluaciones
router.get('/', evaluacionesController.getEvaluaciones);
router.post('/', evaluacionesController.createEvaluacion);
router.put('/:id_evaluacion', evaluacionesController.updateEvaluacion);
router.delete('/:id_evaluacion', evaluacionesController.deleteEvaluacion);

module.exports = router;
