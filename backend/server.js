const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos da pasta build/html
app.use(express.static(path.join(__dirname, 'build', 'html')));

// Rotas da API
const usuarioRoutes = require('./routes/usuarioRoutes');
const livroRoutes = require('./routes/livroRoutes');
const desejoRoutes = require('./routes/desejoRoutes');
const leituraRoutes = require('./routes/leituraRoutes');
const avaliacaoRoutes = require('./routes/avaliacaoRoutes');

app.use('/api', usuarioRoutes);
app.use('/api', livroRoutes);
app.use('/api', desejoRoutes);
app.use('/api', leituraRoutes);
app.use('/api', avaliacaoRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
