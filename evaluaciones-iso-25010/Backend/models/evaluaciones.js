// backend/models/evaluaciones.js

const db = require('../config/db');

// Obtener todas las evaluaciones
const getAllEvaluaciones = () => {
    return new Promise((resolve, reject) => {
        db.query(`
            SELECT evaluaciones.*, software.nombre_software, usuarios.nombre_usuario
            FROM evaluaciones
            INNER JOIN software ON evaluaciones.id_software = software.id_software
            INNER JOIN usuarios ON evaluaciones.id_evaluador = usuarios.id_usuario
        `, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

// Crear una evaluación
const createEvaluacion = (id_software, id_evaluador, estado) => {
    return new Promise((resolve, reject) => {
        db.query(
            "INSERT INTO evaluaciones (id_software, id_evaluador, estado) VALUES (?, ?, ?)",
            [id_software, id_evaluador, estado],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            }
        );
    });
};

// Actualizar una evaluación
const updateEvaluacion = (id_evaluacion, estado, fecha_envio) => {
    return new Promise((resolve, reject) => {
        db.query(
            "UPDATE evaluaciones SET estado = ?, fecha_envio = ? WHERE id_evaluacion = ?",
            [estado, fecha_envio, id_evaluacion],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            }
        );
    });
};

// Eliminar una evaluación
const deleteEvaluacion = (id_evaluacion) => {
    return new Promise((resolve, reject) => {
        db.query(
            "DELETE FROM evaluaciones WHERE id_evaluacion = ?",
            [id_evaluacion],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            }
        );
    });
};

module.exports = {
    getAllEvaluaciones,
    createEvaluacion,
    updateEvaluacion,
    deleteEvaluacion
};
