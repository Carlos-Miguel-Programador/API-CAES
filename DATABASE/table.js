const db = require('./connection');
const Sequelize = require('sequelize');

const table = db.define('caes',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    imagem:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = table;