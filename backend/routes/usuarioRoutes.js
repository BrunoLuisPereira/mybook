// routes/usuarioRoutes.js

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/buscar-usuario', usuarioController.buscarUsuario);
router.put('/usuario', usuarioController.atualizarPerfil);

module.exports = router;
