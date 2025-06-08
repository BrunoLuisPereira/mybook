const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/livroController');

router.post   ('/livros',        ctrl.adicionarLivro);
router.get    ('/livros/:email', ctrl.listarLivros);
router.put    ('/livros/:id',    ctrl.atualizarLivro);
router.delete ('/livros/:id',    ctrl.excluirLivro);

module.exports = router;
