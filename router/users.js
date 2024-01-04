const express = require('express');

router = express.Router();

router.get('/users', (req, res, next) => {
    res.send('Teses!');
});

module.exports = router;