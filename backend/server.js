// server.js

const express = require('express');
const app = express();
const cors = require('cors');

// Middleware deve vir primeiro
app.use(cors());
app.use(express.json());

// Rotas
const usuarioRoutes = require('./routes/usuarioRoutes');
const livroRoutes = require('./routes/livroRoutes');
const desejoRoutes = require('./routes/desejoRoutes');
const leituraRoutes = require('./routes/leituraRoutes');
const avaliacaoRoutes = require('./routes/avaliacaoRoutes');

// Use as rotas depois dos middlewares
app.use('/api', usuarioRoutes);
app.use('/api', livroRoutes);
app.use('/api', desejoRoutes);
app.use('/api', leituraRoutes);
app.use('/api', avaliacaoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
