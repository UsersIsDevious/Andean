const express = require('express');
const sseController = require('../controllers/sseController');

const router = express.Router();

router.get('/events', sseController.sseEndpoint);

module.exports = router;
