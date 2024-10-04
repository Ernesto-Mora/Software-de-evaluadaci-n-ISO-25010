const db = require('../config/db');

// Obtener todas las evaluaciones
exports.getAllEvaluations = (req, res) => {
    db.query('SELECT * FROM evaluaciones', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

// Crear una nueva evaluación
exports.createEvaluation = (req, res) => {
    const { id_software, id_evaluador, estado, fecha_creacion, fecha_envio } = req.body;
    const query = 'INSERT INTO evaluaciones (id_software, id_evaluador, estado, fecha_creacion, fecha_envio) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [id_software, id_evaluador, estado, fecha_creacion, fecha_envio], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Evaluación creada correctamente.');
    });
};

// Actualizar una evaluación
exports.updateEvaluation = (req, res) => {
    const { id } = req.params;
    const { estado, fecha_envio } = req.body;
    const query = 'UPDATE evaluaciones SET estado = ?, fecha_envio = ? WHERE id_evaluacion = ?';
    db.query(query, [estado, fecha_envio, id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Evaluación actualizada correctamente.');
    });
};

// Eliminar una evaluación
exports.deleteEvaluation = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM evaluaciones WHERE id_evaluacion = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Evaluación eliminada correctamente.');
    });
};

// Actualizar el estado de una evaluación (aceptada o rechazada)
exports.updateEvaluationStatus = (req, res) => {
    const { estado } = req.body;
    const id = req.params.id;

    db.query('UPDATE Evaluaciones SET estado = ? WHERE id_evaluacion = ?', [estado, id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al actualizar estado de evaluación' });
        res.status(200).json({ message: 'Estado de evaluación actualizado correctamente' });
    });
};