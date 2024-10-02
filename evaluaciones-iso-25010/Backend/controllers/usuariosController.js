// backend/controllers/usuariosController.js

const Usuario = require('../models/usuarios');

// Obtener todos los usuarios
const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.getAllUsuarios();
        res.status(200).json(usuarios);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

// Obtener un usuario por ID
const getUsuario = async (req, res) => {
    const { id_usuario } = req.params;

    try {
        const usuario = await Usuario.getUsuarioById(id_usuario);
        res.status(200).json(usuario);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};

// Crear un nuevo usuario
const createUsuario = async (req, res) => {
    const { nombre_usuario, email, contraseña, rol } = req.body;

    if (!nombre_usuario || !email || !contraseña || !rol) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    try {
        const usuario = await Usuario.createUsuario(nombre_usuario, email, contraseña, rol);
        res.status(201).json(usuario);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

// Actualizar un usuario
const updateUsuario = async (req, res) => {
    const { id_usuario } = req.params;
    const { nombre_usuario, email, rol } = req.body;

    if (!nombre_usuario || !email || !rol) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    try {
        const usuario = await Usuario.updateUsuario(id_usuario, nombre_usuario, email, rol);
        res.status(200).json(usuario);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};

// Eliminar un usuario
const deleteUsuario = async (req, res) => {
    const { id_usuario } = req.params;

    try {
        await Usuario.deleteUsuario(id_usuario);
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};

module.exports = {
    getUsuarios,
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario,
};
