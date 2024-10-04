const db = require('../config/db');

// Obtener todos los usuarios
exports.getAllUsers = (req, res) => {
    db.query('SELECT * FROM Usuarios', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener usuarios' });
        res.status(200).json(results);
    });
};

// Crear un nuevo usuario
exports.createUser = (req, res) => {
    const { nombre_usuario, email, contraseña, rol } = req.body;
    const query = 'INSERT INTO usuarios (nombre_usuario, email, contraseña, rol) VALUES (?, ?, ?, ?)';
    db.query(query, [nombre_usuario, email, contraseña, rol], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Usuario creado correctamente.');
    });
};

// Actualizar un usuario
exports.updateUser = (req, res) => {
    const { nombre_usuario, email, rol } = req.body;
    const id = req.params.id;

    db.query('UPDATE Usuarios SET nombre_usuario = ?, email = ?, rol = ? WHERE id_usuario = ?', 
        [nombre_usuario, email, rol, id], 
        (err, result) => {
            if (err) return res.status(500).json({ error: 'Error al actualizar usuario' });
            res.status(200).json({ message: 'Usuario actualizado correctamente' });
        });
};

// Eliminar un usuario
exports.deleteUser = (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM Usuarios WHERE id_usuario = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al eliminar usuario' });
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    });
};

// Asignar rol a un usuario
exports.asignarRol = (req, res) => {
    const { rol } = req.body;
    const id = req.params.id;

    db.query('UPDATE Usuarios SET rol = ? WHERE id_usuario = ?', [rol, id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al asignar rol' });
        res.status(200).json({ message: 'Rol asignado correctamente' });
    });
};
