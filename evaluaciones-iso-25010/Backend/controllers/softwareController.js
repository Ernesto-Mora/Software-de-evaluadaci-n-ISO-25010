const db = require('../config/db');

// Obtener todos los softwares
exports.getAllSoftware = (req, res) => {
    db.query('SELECT * FROM Software', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener software' });
        res.status(200).json(results);
    });
};

// Crear un nuevo software
exports.createSoftware = (req, res) => {
    const { nombre_software, descripcion, creado_por } = req.body;

    db.query('INSERT INTO Software (nombre_software, descripcion, creado_por) VALUES (?, ?, ?)', 
        [nombre_software, descripcion, creado_por], 
        (err, result) => {
            if (err) return res.status(500).json({ error: 'Error al crear software' });
            res.status(201).json({ message: 'Software creado correctamente' });
        });
};

// Actualizar un software
exports.updateSoftware = (req, res) => {
    const { nombre_software, descripcion } = req.body;
    const id = req.params.id;

    db.query('UPDATE Software SET nombre_software = ?, descripcion = ? WHERE id_software = ?', 
        [nombre_software, descripcion, id], 
        (err, result) => {
            if (err) return res.status(500).json({ error: 'Error al actualizar software' });
            res.status(200).json({ message: 'Software actualizado correctamente' });
        });
};

// Eliminar un software
exports.deleteSoftware = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM software WHERE id_software = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Software eliminado correctamente.');
    });
};
