// /backend/controllers/authController.js
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

// Cargando variables de entorno
dotenv.config();

// Controlador para registrar un nuevo usuario
exports.registrarUsuario = async (req, res) => {
    const { nombre_usuario, email, contraseña, rol } = req.body;

    try {
        // Verificar si el usuario ya existe
        db.query('SELECT * FROM Usuarios WHERE email = ?', [email], async (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error en el servidor.' });
            }

            if (result.length > 0) {
                return res.status(400).json({ message: 'El usuario ya existe.' });
            }

            // Hash de la contraseña
            const hashedPassword = await bcrypt.hash(contraseña, 10);

            // Crear el nuevo usuario
            db.query('INSERT INTO Usuarios (nombre_usuario, email, contraseña, rol) VALUES (?, ?, ?, ?)', 
                [nombre_usuario, email, hashedPassword, rol], (err, result) => {
                if (err) {
                    return res.status(500).json({ message: 'Error creando el usuario.' });
                }

                res.status(201).json({ message: 'Usuario registrado exitosamente.' });
            });
        });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor.' });
    }
};

// Controlador para iniciar sesión
exports.loginUsuario = (req, res) => {
    const { email, contraseña } = req.body;

    db.query('SELECT * FROM Usuarios WHERE email = ?', [email], async (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error en el servidor.' });
        }

        if (result.length === 0) {
            return res.status(401).json({ message: 'Credenciales incorrectas.' });
        }

        const user = result[0];

        // Verificar la contraseña con bcrypt
        const validPassword = await bcrypt.compare(contraseña, user.contraseña);
        if (!validPassword) {
            return res.status(401).json({ message: 'Credenciales incorrectas.' });
        }

        // Generar el token usando el JWT_SECRET del .env
        const token = jwt.sign({ id_usuario: user.id_usuario, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Enviar el token al cliente
        res.json({ token });
    });
};