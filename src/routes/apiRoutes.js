const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.get('/api', apiController.handleApiRequest);

module.exports = router;
