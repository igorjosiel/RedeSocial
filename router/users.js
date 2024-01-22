const express = require('express');

const usersController = require('../controllers/usersController');

const authenticatedUser = (req, res, next) => {
    if (!req.session?.user) return res.redirect('/login');
    
    next();
};

router = express.Router();

router.get('/users', authenticatedUser, usersController.getUsers);
router.post('/user', authenticatedUser, usersController.createUser);

module.exports = router;