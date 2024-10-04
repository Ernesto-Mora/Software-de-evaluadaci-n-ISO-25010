// /middleware/auth.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

function verifyToken(req, res, next) {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado.' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;  // Aquí el rol debe estar presente en `req.user`
        next();
    } catch (err) {
        res.status(400).json({ message: 'Token inválido.' });
    }
}

module.exports = verifyToken;
