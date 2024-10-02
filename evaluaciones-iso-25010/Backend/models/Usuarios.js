// backend/models/usuarios.js

const db = require('../config/db');

// Obtener todos los usuarios
const getAllUsuarios = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM usuarios', (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

// Obtener usuario por ID
const getUsuarioById = (id_usuario) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id_usuario], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results[0]);
        });
    });
};

// Crear usuario
const createUsuario = (nombre_usuario, email, contraseña, rol) => {
    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO usuarios (nombre_usuario, email, contraseña, rol) VALUES (?, ?, ?, ?)',
            [nombre_usuario, email, contraseña, rol],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            }
        );
    });
};

// Actualizar usuario
const updateUsuario = (id_usuario, nombre_usuario, email, rol) => {
    return new Promise((resolve, reject) => {
        db.query(
            'UPDATE usuarios SET nombre_usuario = ?, email = ?, rol = ? WHERE id_usuario = ?',
            [nombre_usuario, email, rol, id_usuario],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            }
        );
    });
};

// Eliminar usuario
const deleteUsuario = (id_usuario) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM usuarios WHERE id_usuario = ?', [id_usuario], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

module.exports = {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
};
