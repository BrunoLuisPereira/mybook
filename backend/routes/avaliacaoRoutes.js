// routes/avaliacaoRoutes.js

const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

// Adicionar avaliação
router.post('/avaliacoes', avaliacaoController.adicionarAvaliacao);

// Listar avaliações do usuário (agora com parâmetro na URL)
router.get('/avaliacoes/:email', avaliacaoController.listarAvaliacoesDoUsuario);

// Top 10 global de livros mais bem avaliados
router.get('/avaliacoes/top10', avaliacaoController.listarTop10Global);

module.exports = router;
