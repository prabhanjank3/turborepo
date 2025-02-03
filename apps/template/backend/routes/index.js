const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sample.controller');

router.get('/test', sampleController.testEndpoint);

module.exports = router;
