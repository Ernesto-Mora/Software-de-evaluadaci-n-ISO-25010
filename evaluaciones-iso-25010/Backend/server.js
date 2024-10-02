// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usuariosRoutes = require('./routes/usuariosRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
const verifyToken = require('./middleware/auth');
const checkRole = require('./middleware/role');
const errorHandler = require('./middleware/errorHandler');

// Rutas
app.use('/api/usuarios', usuariosRoutes);

// Configurar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
