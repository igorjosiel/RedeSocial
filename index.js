const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const SessionStore = require('express-session-sequelize')(expressSession.Store);

const sequelize = require('./util/database');

const routerUsers = require('./router/users');
const routerAuth = require('./router/auth');

const sequelizeSessionStore = new SessionStore({
    db: sequelize,
    createDatabaseTable: true,
    charset: 'utf8mb4_bin',
});

const app = express();

app.use(cookieParser());
app.use(expressSession({
    key: 'session_cookie_login_key',
	secret: 'session_cookie_login_secret',
	store: sequelizeSessionStore,
	resave: false,
	saveUninitialized: false,
}));

// const User = require('./model/users');

sequelize.sync();

// User.create({ name: 'francielle', nickname: 'fran', email: 'testfrane@gmail.com', password: '0911' });

app.set('view engine', 'ejs');
app.set('views', 'views');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(urlencodedParser);
app.use(express.static(__dirname + '/public'));

app.use(routerUsers);
app.use(routerAuth);

app.listen(3000);