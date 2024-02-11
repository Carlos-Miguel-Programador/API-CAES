const Sequelize = require('sequelize');

const connection = new Sequelize('caes', 'root', '123456789carlos', {
    host: "localhost",
    dialect: "mysql"
});

connection.authenticate()
.then(()=>{
    console.log('Conexão Ok');
})
.catch(()=>{
    console.log('Conexão failed');
});

module.exports = connection;