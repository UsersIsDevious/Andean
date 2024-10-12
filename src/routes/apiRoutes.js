const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.post('/api/:operation', apiController.handleApiRequest);

module.exports = router;
