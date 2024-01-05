const express = require('express');

const usersController = require('../controllers/usersController');

router = express.Router();

router.get('/users', usersController.getUsers);

module.exports = router;