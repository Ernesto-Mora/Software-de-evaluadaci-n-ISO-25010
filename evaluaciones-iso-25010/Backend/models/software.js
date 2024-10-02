// backend/models/software.js

const db = require('../config/db');

// Obtener todos los softwares
const getAllSoftware = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM software', (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

// Obtener software por ID
const getSoftwareById = (id_software) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM software WHERE id_software = ?', [id_software], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results[0]);
        });
    });
};

// Crear nuevo software
const createSoftware = (nombre_software, descripcion, creado_por) => {
    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO software (nombre_software, descripcion, creado_por) VALUES (?, ?, ?)',
            [nombre_software, descripcion, creado_por],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            }
        );
    });
};

// Actualizar software
const updateSoftware = (id_software, nombre_software, descripcion) => {
    return new Promise((resolve, reject) => {
        db.query(
            'UPDATE software SET nombre_software = ?, descripcion = ? WHERE id_software = ?',
            [nombre_software, descripcion, id_software],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            }
        );
    });
};

// Eliminar software
const deleteSoftware = (id_software) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM software WHERE id_software = ?', [id_software], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

module.exports = {
    getAllSoftware,
    getSoftwareById,
    createSoftware,
    updateSoftware,
    deleteSoftware,
};
