// /backend/routes/comentariosRoutes.js
const express = require('express');
const router = express.Router();
const { getAllComentarios, createComentarios, deleteComentarios } = require('../controllers/comentariosController');

// Obtener todos los comentarios para una evaluación
router.get('/:id_evaluacion', getAllComentarios); //id_coment_evaluacion

// Crear un comentario para una evaluación
router.post('/', createComentarios);

// Eliminar un comentario
router.delete('/:id', deleteComentarios);

module.exports = router;
