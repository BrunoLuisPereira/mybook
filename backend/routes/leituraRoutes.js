const express = require('express');
const router = express.Router();
const controller = require('../controllers/leituraController');

router.post('/leituras', controller.adicionarLeitura);
router.get('/leituras/:email', controller.listarLeituras);
router.put('/leituras/inicio/:id', controller.marcarInicio);
router.put('/leituras/fim/:id', controller.marcarFim);

module.exports = router;
