const { Sequelize } = require('sequelize')

//crear una instancia con parametros de configuracion de nuestra base de datos
// necesitamos un obejeto de configuracion que no es mas que las credencales de mi base de datos
//Un objeto de configuracion --> las credenciales de mi base de datos
const db = new Sequelize({
    database: "todoapp",
    username: "postgres",
    host: "localhost", //127.0.0.1
    port: "3000",
    password: "root",
    dialect: "postgres" // la base de datos que estamos usando 
})

module.exports = db;


