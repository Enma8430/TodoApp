const db = require('../utils/database');
const { DataTypes } = require('sequelize')
const Users = require('./users.model')


const Todos = db.define('todos', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descrition: {
        type: DataTypes.STRING,
        allowNull: true
    },
    iscomplete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_complete'
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: { //para la llave foranea
            model: Users,
            key: 'id' //del users_id me conecto a id de users.
        }

    }

})
module.exports = Todos
