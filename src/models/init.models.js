//vamos a importar todos  nuestros modelos creados

const Users = require('./users.model')
const Todos = require('./todos.model')
const Categories = require('./categories.model')
const TodoCategories = require('./todos-categories.model')


const initModels = () => {

    //vamos a crear las relacioes [pero por ahora no ok?]
    //vamos a crear las relaciones
    //hasOne --> tiene uno solo
    //hasMany --> tiene muchos
    //belongsTo --> perteneces a 
    Todos.belongsTo(Users, { as: 'autor', foreignKey: 'user_id' });
    Users.hasMany(Todos, { as: 'task', foreignKey: 'user_id' });

    //de Muchos a Muchos y tarea
    TodoCategories.belongsTo(Todos, {as:'task', foreignKey: 'todo_id'});
    Todos.hasMany(TodoCategories, {as:'category', foreignKey: 'todo_id'});

    TodoCategories.belongsTo(Categories, {as: 'category', foreignKey: 'category_id'});
    Categories.hasMany(TodoCategories, {as:'task', foreignKey: 'category_id'});

}

module.exports = initModels;
