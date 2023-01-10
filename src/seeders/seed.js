const Todos = require("../models/todos.model");
const Users = require("../models/users.model");
const db = require("../utils/database");


const users = [
    {username:'Iannacus', email: 'ian@gmail.com', password: '1234'},
    {username:'Lucero', email: 'Lucero@gmail.com', password: '1234'},
    {username:'Jhorman', email: 'Jhorman@gmail.com', password: '1234'}
]

const todos = [
    {title:'Tarea 1', description:'shalalala shalalalalalal', userId:1},
    {title:'Tarea 2', description:'shalalala shalalalalalal 2', userId:1},
    {title:'Tarea imposible', userId:2},
    {title:'Dormir zzZZzzZZ', description:'porque node no me deja', userId:3},
]





db.sync({force: true})
    .then(() => {
        console.log('Iniciando con el semradio maliciano');
        users.forEach((users) => Users.create(users));

        setTimeout(() => {
            todos.forEach((todo) => Todos.create(todo))
        }, 100)
    })