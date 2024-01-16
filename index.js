const express = require('express');
const bodyParser = require('body-parser');

const User = require('./model/users');

const routerUsers = require('./router/users');

const sequelize = require('./util/database');

sequelize.sync();

// User.create({ name: 'francielle', nickname: 'fran', email: 'testfrane@gmail.com', password: '0911' });

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(urlencodedParser);

app.use(routerUsers);

app.listen(3000);