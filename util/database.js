const Sequile = require('sequelize');

const sequelize = new Sequile('rede_social', 'root', '1234', {
    dialect: 'mysql',
    host: 'localhost',
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

module.exports = sequelize;