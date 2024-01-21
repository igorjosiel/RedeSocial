const bcrypt = require('bcrypt');

const User = require('../model/users');

const getUsers = (req, res, next) => {
    User.findAll()
        .then(users => users.map(user => user.dataValues))
        .then(users => res.render('list-users.ejs', { users }));
}

const createUser = (req, res, next) => {
    const name = req.body.name;
    const nickname = req.body.nickname;
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ where: { email: email } })
        .then((userFound) => {
            if (userFound) {
                return res.redirect('/login');
            }

            console.log('Name: ', name, nickname, email, password);

            bcrypt.hash(password, 10)
                .then(encryptedPassword => {
                    const user = new User({
                        name,
                        nickname,
                        email,
                        password: encryptedPassword,
                    });

                    return user.save();
                }).then(() => {
                    return res.redirect('/users');
                });
        });
}

module.exports = {
    getUsers,
    createUser,
}