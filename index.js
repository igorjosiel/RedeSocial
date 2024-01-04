const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.send('Deu certo!');
});

app.get('/fran', (req, res, next) => {
    res.send('Francielle!');
});

app.listen(3000);