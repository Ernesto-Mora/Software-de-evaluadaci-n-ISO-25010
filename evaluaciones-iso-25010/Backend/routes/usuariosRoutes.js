// backend/routes/usuariosRoutes.js

const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const checkRole = require('../middleware/role');
const { getAllUsers, createUser, updateUser, deleteUser, asignarRol } = require('../controllers/usuariosController');

// Obtener todos los usuarios (solo administrador_general)
router.get('/', verifyToken, checkRole(['administrador_general']), getAllUsers);

// Crear un nuevo usuario
router.post('/', createUser);

// Actualizar un usuario
router.put('/:id', verifyToken, checkRole(['administrador_general']), updateUser);

// Eliminar un usuario
router.delete('/:id', verifyToken, checkRole(['administrador_general']), deleteUser);

// Asignar un rol a un usuario
router.post('/:id/asignar_rol', verifyToken, checkRole(['administrador_general']), asignarRol);

module.exports = router;
