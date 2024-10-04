// /backend/controllers/likertController.js
const db = require('../config/db');

// Obtener todas las preguntas Likert
exports.getAllPreguntas = (req, res) => {
    db.query('SELECT * FROM Preguntas_Likert', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener preguntas Likert' });
        res.status(200).json(results);
    });
};

// Crear una respuesta Likert
exports.createRespuesta = (req, res) => {
    const { id_evaluacion, id_pregunta, valor_respuesta } = req.body;

    db.query('INSERT INTO Respuestas_Likert (id_evaluacion, id_pregunta, valor_respuesta) VALUES (?, ?, ?)', 
        [id_evaluacion, id_pregunta, valor_respuesta], 
        (err, result) => {
            if (err) return res.status(500).json({ error: 'Error al crear respuesta Likert' });
            res.status(201).json({ message: 'Respuesta Likert creada correctamente' });
        });
};

// Obtener todas las respuestas Likert de una evaluación
exports.getAllRespuestasDeEvaluaciones = (req, res) => {
    const { id_evaluacion } = req.params;

    db.query('SELECT * FROM Respuestas_Likert WHERE id_evaluacion = ?', [id_evaluacion], (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener respuestas Likert' });
        res.status(200).json(results);
    });
};
