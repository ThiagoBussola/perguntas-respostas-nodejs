const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});

module.exports = connection;