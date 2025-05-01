// server.js

const express = require('express');
const app = express();
const cors = require('cors');
const usuarioRoutes = require('./routes/usuarioRoutes');
const livroRoutes = require('./routes/livroRoutes');
const desejoRoutes = require('./routes/desejoRoutes');
const leituraRoutes = require('./routes/leituraRoutes');
const avaliacaoRoutes = require('./routes/avaliacaoRoutes');


app.use('/api', desejoRoutes);
app.use('/api', livroRoutes);
app.use('/api', leituraRoutes);
app.use('/api', avaliacaoRoutes);
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', usuarioRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
