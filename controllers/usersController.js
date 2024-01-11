const User = require('../model/users');

const getUsers = (req, res, next) => {
    User.findAll()
        .then(users => users.map(user => user.dataValues))
        .then(users => res.render('list-users.ejs', { users }));
}

module.exports = {
    getUsers
}