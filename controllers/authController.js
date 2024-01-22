const bcrypt = require('bcrypt');

const User = require('../model/users');

const renderLoginPage = (req, res, next) => {
    res.render('login.ejs');
}

const postLogin = (req, res, next) => {
    const { email, password } = req.body;

    User.findOne({ where: { email: email } })
        .then((user) => {
            if (!user) return res.redirect('/login');

            bcrypt.compare(password, user.password)
                .then((doMatch) => {
                    if (doMatch) {
                        req.session.user = email;
                        req.session.save();

                        return res.redirect('/users');
                    }

                    res.redirect('/login');
                })
                .catch(() => {
                    res.redirect('/login');
                });
        })
}

const getLogout = (req, res, next) => {
    req.session.destroy();

    return res.render('/login');
};

module.exports = {
    renderLoginPage,
    postLogin,
    getLogout,
}