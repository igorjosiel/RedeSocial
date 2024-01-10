const express = require('express');
const User = require('./model/users');

const routerUsers = require('./router/users');

const sequelize = require('./util/database');

sequelize.sync();

// User.create({ name: 'Igor', nickname: 'Iguinho', email: 'teste@gmail.com', password: '1234' });

const app = express();

app.use(routerUsers);

app.listen(3000);