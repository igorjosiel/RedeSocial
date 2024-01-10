const User = require('../model/users');

const getUsers = (req, res, next) => {
    User.findAll()
        .then(users => users.map(user => user.dataValues))
        .then(users => console.log('Users: ', users));

    res.send('<h1>Usuários:</h1>');
}

module.exports = {
    getUsers
}