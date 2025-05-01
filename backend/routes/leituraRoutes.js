// routes/leituraRoutes.js

const express = require('express');
const router = express.Router();
const leituraController = require('../controllers/leituraController');

router.post('/leituras', leituraController.adicionarLeitura);
router.put('/leituras/inicio', leituraController.marcarInicio);
router.put('/leituras/fim', leituraController.marcarFim);
router.get('/leituras', leituraController.listarLeituras);

module.exports = router;
