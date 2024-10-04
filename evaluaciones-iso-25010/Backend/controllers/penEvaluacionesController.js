// /backend/controllers/penEvaluacionesController.js
const db = require('../config/db');

// Obtener todas las evaluaciones pendientes
exports.getAllPenEvaluaiones = (req, res) => {
    db.query('SELECT * FROM Evaluaciones_Pendientes', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener evaluaciones pendientes' });
        res.status(200).json(results);
    });
};

// Actualizar estado de evaluación pendiente (aceptada/rechazada)
exports.updatePenEvaluacionesStatus = (req, res) => {
    const { estado_revision } = req.body;
    const id = req.params.id;

    db.query('UPDATE Evaluaciones_Pendientes SET estado_revision = ? WHERE id_evaluacion_pendiente = ?', 
        [estado_revision, id], 
        (err, result) => {
            if (err) return res.status(500).json({ error: 'Error al actualizar estado de evaluación pendiente.' });
            res.status(200).json({ message: 'Estado de evaluación pendiente actualizado correctamente.' });
        });
};
