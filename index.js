const express = require('express');

const routerUsers = require('./router/users');

const app = express();

app.use(routerUsers);

app.listen(3000);