const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const checkRole = require('../middleware/role');
const { getAllSoftware, createSoftware, updateSoftware, deleteSoftware } = require('../controllers/softwareController');

// Obtener todos los softwares
router.get('/', verifyToken, checkRole(['administrador_contenido', 'evaluador']), getAllSoftware);

// Crear un nuevo software
router.post('/', verifyToken, checkRole(['administrador_contenido', 'evaluador']), createSoftware);

// Actualizar un software
router.put('/:id', verifyToken, checkRole(['administrador_contenido']), updateSoftware);

// Eliminar un software
router.delete('/:id', verifyToken, checkRole(['administrador_contenido']), deleteSoftware);

module.exports = router;
