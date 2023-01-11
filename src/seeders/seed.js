const Todos = require("../models/todos.model");
const Users = require("../models/users.model");
const db = require("../utils/database");
const Categories = require('../models/categories.model');
const TodoCategories = require("../models/todos-categories.model");

const users = [
    {username:'Iannacus', email: 'ian@gmail.com', password: '1234'},
    {username:'Lucero', email: 'Lucero@gmail.com', password: '1234'},
    {username:'Jhorman', email: 'Jhorman@gmail.com', password: '1234'}
]

const todos = [
    {title:'estudiar node', description:'shalalala shalalalalalal', userId:1},
    {title:'pasear al perro', description:'shalalala shalalalalalal 2', userId:1},
    {title:'lavar platos', userId:2},
    {title:'ir chequeo mensual', description:'porque node no me deja', userId:3},
]

const categories = [
    {name: 'personal'}, //1
    {name: 'educacion'}, //2
    {name: 'salud'},//3
    {name: 'trabajo'},//4
    {name: 'hogar'},//5
    {name: 'cocina'},//6
    {name: 'deporte'},//7
    {name: 'ocio'},//8
    {name: 'financiero'},//9
    {name: 'entretenimiento'},//10

]

const todosCategories = [
    {categoryId: 1, todoId: 1},
    {categoryId: 2, todoId: 1},
    {categoryId: 4, todoId: 1},
    {categoryId: 1, todoId: 2},
    {categoryId: 7, todoId: 2},
    {categoryId: 10, todoId: 2},
    {categoryId: 3, todoId: 2},
    {categoryId: 5, todoId: 3},
    {categoryId: 6, todoId: 3},
    {categoryId: 1, todoId: 4},
    {categoryId: 3, todoId: 4},
]


db.sync({force: true})
    .then(() => {
        console.log('Iniciando con el semradio maliciano');
        users.forEach((users) => Users.create(users));

        setTimeout(() => {
            todos.forEach((todo) => Todos.create(todo))
        }, 100);
        setTimeout(() => {
            categories.forEach((category) => Categories.create(category))
        }, 250);
        setTimeout(() => {
            todosCategories.forEach((tc) => TodoCategories.create(tc))
        }, 400);
    })