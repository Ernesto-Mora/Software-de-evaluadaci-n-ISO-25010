// backend/routes/usuariosRoutes.js

const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const authenticateToken = require('../middleware/auth');

// Rutas de usuarios
router.get('/', authenticateToken, usuariosController.getUsuarios);
router.get('/:id_usuario', authenticateToken, usuariosController.getUsuario);
router.post('/', authenticateToken, usuariosController.createUsuario);
router.put('/:id_usuario', authenticateToken, usuariosController.updateUsuario);
router.delete('/:id_usuario', authenticateToken, usuariosController.deleteUsuario);

module.exports = router;
