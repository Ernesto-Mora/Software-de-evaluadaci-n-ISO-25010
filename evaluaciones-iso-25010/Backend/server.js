// /backend/server.js

const express = require('express');
const cors = require('cors'); // Importar CORS
const app = express();

// Middlewares
const verifyToken = require('./middleware/auth');
const checkRole = require('./middleware/role');
const errorHandler = require('./middleware/errorHandler');

// Configuración de la base de datos
const db = require('./config/db');

// Middlewares globales
app.use(express.json()); // Parsear JSON
app.use(cors()); // Habilitar CORS

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos: ', err);
        process.exit(1);
    }
    console.log('Conectado a la base de datos MySQL');
});

// Rutas de autenticación (registro e inicio de sesión)
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Rutas de usuarios CRUD
const usuariosRoutes = require('./routes/usuariosRoutes');
app.use('/api/usuarios', verifyToken, usuariosRoutes);

// Rutas de software CRUD
const softwareRoutes = require('./routes/softwareRoutes');
app.use('/api/software', verifyToken, softwareRoutes);

// Rutas de evaluaciones CRUD
const evaluacionesRoutes = require('./routes/evaluacionesRoutes');
app.use('/api/evaluaciones', verifyToken, evaluacionesRoutes);

// Preguntas y respuestas Likert
const likertRoutes = require('./routes/likertRoutes');
app.use('/api/likert', verifyToken, likertRoutes);

// Comentarios
const comentariosRoutes = require('./routes/comentariosRoutes');
app.use('/api/comentarios', verifyToken, comentariosRoutes);

// Evaluaciones Pendientes
const penEvaluationRoutes = require('./routes/penEvaluacionesRoutes');
app.use('/api/pen-evaluaciones', verifyToken, penEvaluationRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

// Inicializar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
