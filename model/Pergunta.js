const Sequelize = require('sequelize');
const connection = require('../database/database');

const Pergunta = connection.define('pergunta', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// force false = se a tabela ja existir ele não força a criação dela
Pergunta.sync({force: false}).then(() => {
    console.log("tabela criada")
})

module.exports = Pergunta