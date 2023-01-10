const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Categories = require('./categories.model')
const Todos = require('./todos.model')

const TodoCategories = db.define('todo_categories', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    todoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'todo_id',
        references:{
            model: Todos,
            key: 'id'
        }
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'todo_id',
        references:{
            model: Categories,
            key: 'id'
        }
    }
},
{
    timestamps:false
}
)

module.exports = TodoCategories