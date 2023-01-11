// inportabamos express
const express = require('express');
const db = require("./utils/database")
const initModels = require('./models/init.models');
const Users = require('./models/users.model');
const userRoutes = require('./routes/users.routes')
const Todos = require('./models/todos.model')

//crear una instancia de express

const app = express();

const PORT = 8000;

app.use(express.json())

//probando la conexion a la base de datos
db.authenticate()
    .then(() => console.log('Autenticacion exitosa'))
    .catch((error) => console.log(error));

initModels();

//usar el metodo sync para sincronizar la informacion de la base de datos
//devueleve una promesa y la resolvemos con then

//vamos a usar el metodo sync de nuestra db
db.sync({ force: false }) //devuelve una promesa
    .then(() => console.log('Base de datos sincronizada'))
    .catch((error) => console.log(error))

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Bienvenido al servidor' })
});

app.use('/api/v1', userRoutes);



//GET a /users
app.get('/users', async (req, res) => {
    try {
        //vamos a obtener el resultado de consultar a todos los usuarios de la db
        const result = await Users.findAll(); //SELECT * FROM users 
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
})
//Obtener una tarea por su id 
app.get('/users/:id', async (req, res) => {

    try {
        const { id } = req.params
        const result = await Users.findByPk(id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
})
//obtener una tarea por su nombre
app.get("/users/username/:username", async (req, res) => {
    try {
        const { username } = req.params;
        const result = await Users.findOne({ where: { username } }) //SELECT * FROM users WHERE username = Jhorman
        res.status(200).json(resultmay)
    } catch (error) {
        console.log(error);
    }
})

//Creando un usuario
app.post('/users', async (req, res) => {
    try {
        const user = req.body
        const result = await Users.create(user);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message)
        console.log(error);
    }
})

//actualizar un usario, solo podemos cambiar password
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const field = req.body
        const result = await Users.update(field, {
            where: { id }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
})


//eliminando usuarios
app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const result = await Users.destroy({
            where: { id }
        });
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
})

//---------------------Parte de los Todos-------------------





//obtener todos los todos
app.get('/todos', async (req, res ) => {
    try {
        const result = await Todos.findAll();
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
})


//obtener todo por Id
app.get('/todos/:id', async (req, res ) => {
    try{
        const {id} = req.params
        const result = await Todos.findByPk(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

//crear un nuevo todo

app.post('/todos', async (req, res) => {
    try {
        const todo = req.body
        const result = await Todos.create(todo)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

//actualizar el Todo actualizando el isComplete

app.put('/todos/:id', async (req, res) => {
    try{
        const { id } = req.params
        const field = req.body
        const result = await Todos.update(field, {
            where: {id}
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

//eliminado tarea

app.delete('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params
        const result = await Todos.destroy({
            where: {id}
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
})




app.listen(PORT, () => {
    console.log(`Servidodr corriendo en el puerto ${PORT}`);
});

