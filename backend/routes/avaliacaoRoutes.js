// routes/avaliacaoRoutes.js

const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

router.post('/avaliacoes', avaliacaoController.adicionarAvaliacao);
router.get('/avaliacoes', avaliacaoController.listarAvaliacoesDoUsuario);
router.get('/avaliacoes/top10', avaliacaoController.listarTop10Global);

module.exports = router;
