const express = require('express');

const authController = require('../controllers/authController');

router = express.Router();

router.get('/login', authController.renderLoginPage);

module.exports = router;