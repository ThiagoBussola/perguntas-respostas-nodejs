const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas', 'root', '123', {
    host: '172.17.0.2',
    dialect: 'mariadb'
});

module.exports = connection;