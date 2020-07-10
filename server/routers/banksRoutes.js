const express = require('express');
const banksController = require('../controllers/banksController');

const router = express.Router();

router.get('/', banksController.getAllBanks);

module.exports = router;
