// /backend/controllers/comentariosController.js
const db = require('../config/db');

// Obtener todos los comentarios de una evaluación
exports.getAllComentarios = (req, res) => {
    const { id_evaluacion } = req.params;

    db.query('SELECT * FROM Comentarios WHERE id_evaluacion = ?', [id_evaluacion], (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener comentarios' });
        res.status(200).json(results);
    });
};

// Crear un comentario
exports.createComentarios = (req, res) => {
    const { id_evaluacion, comentario, id_evaluador } = req.body;

    db.query('INSERT INTO Comentarios (id_evaluacion, comentario, id_evaluador, fecha_comentario) VALUES (?, ?, ?, NOW())', 
        [id_evaluacion, comentario, id_evaluador], 
        (err, result) => {
            if (err) return res.status(500).json({ error: 'Error al crear comentario' });
            res.status(201).json({ message: 'Comentario creado correctamente' });
        });
};

// Eliminar un comentario
exports.deleteComentarios = (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM Comentarios WHERE id_comentario = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al eliminar comentario' });
        res.status(200).json({ message: 'Comentario eliminado correctamente' });
    });
};
