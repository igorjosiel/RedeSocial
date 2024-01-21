const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');

const User = require('./model/users');

const routerUsers = require('./router/users');
const routerAuth = require('./router/auth');

const sequelize = require('./util/database');

sequelize.sync();

// User.create({ name: 'francielle', nickname: 'fran', email: 'testfrane@gmail.com', password: '0911' });

const app = express();

// app.use(session({}));

app.set('view engine', 'ejs');
app.set('views', 'views');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(urlencodedParser);
app.use(express.static(__dirname + '/public'));

app.use(routerUsers);
app.use(routerAuth);

app.listen(3000);