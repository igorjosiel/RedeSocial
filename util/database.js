const Sequile = require('sequelize');

const sequelize = new Sequile('rede-social', 'root', '1234', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;