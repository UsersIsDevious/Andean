const express = require('express');
const serverController = require('../controllers/serverController');

const router = express.Router();

router.post('/notify', serverController.handleNotify);
router.post('/stopServer', serverController.stopServer);
router.post('/startGame', serverController.startGame);
router.post('/saveConfig', serverController.saveConfig);
router.post('/loadConfig', serverController.saveConfig);
router.post('/resetConfig', serverController.resetConfig);

module.exports = router;
