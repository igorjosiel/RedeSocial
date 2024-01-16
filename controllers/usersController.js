const bcrypt = require('bcrypt');

const User = require('../model/users');

const getUsers = (req, res, next) => {
    User.findAll()
        .then(users => users.map(user => user.dataValues))
        .then(users => res.render('list-users.ejs', { users }));
}

const createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(encryptedPassword => {
            const name = req.body.name;
            const nickname = req.body.nickname;
            const email = req.body.email;
            const password = encryptedPassword;

            User.create({ name, nickname, email, password });
        });
}

module.exports = {
    getUsers,
    createUser,
}