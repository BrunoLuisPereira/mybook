// routes/livroRoutes.js

const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.post('/livros', livroController.adicionarLivro);
router.get('/livros', livroController.listarLivros);

module.exports = router;
