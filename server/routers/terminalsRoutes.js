const express = require('express');
const terminalsController = require('../controllers/terminalsController');

const router = express.Router();

router.get('/', terminalsController.getAllTerminals);

module.exports = router;
