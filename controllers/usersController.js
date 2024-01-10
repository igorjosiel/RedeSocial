const User = require('../util/database');

const getUsers = (req, res, next) => {
    const user = User.findAll();

    console.log('User: ', user);

    res.send('<h1>Usuários:</h1>');
}

module.exports = {
    getUsers
}