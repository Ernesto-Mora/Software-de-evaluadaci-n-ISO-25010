// /backend/routes/likertRoutes.js
const express = require('express');
const router = express.Router();
const { getAllPreguntas, createRespuesta, getAllRespuestasDeEvaluaciones } = require('../controllers/likertController.js');

// Obtener todas las preguntas Likert
router.get('/preguntas', getAllPreguntas);

// Crear una respuesta Likert
router.post('/respuesta', createRespuesta);

// Obtener todas las respuestas de una evaluación
router.get('/respuestas/:id_evaluacion', getAllRespuestasDeEvaluaciones);

module.exports = router;
