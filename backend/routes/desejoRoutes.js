// routes/desejoRoutes.js

const express = require('express');
const router = express.Router();
const desejoController = require('../controllers/desejoController');

router.post('/desejos', desejoController.adicionarDesejo);
router.get('/desejos', desejoController.listarDesejos);
router.delete('/desejos/:id', desejoController.removerDesejo);


module.exports = router;
