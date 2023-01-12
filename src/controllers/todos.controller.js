const TodosServices = require("../services/todos.services")



const getAllTodos = async (req, res) => {
    try {
        const result = await TodosServices.getAll()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getTodosById = async (req, res) => {
    try {
        const result = await TodosServices.getById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const createTodo = async (req, res) => {
    try {
        const todo = req.body
        const result = await TodosServices.create(todo)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const updateTodo = async (req, res ) => {
    try {
        const {id} = req.params
        const field = req.body
        const result = await TodosServices.update(id, field)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const deleteTodo = async (req, res ) => {
    try {
        const {id } = req.params
        const result = await TodosServices.destroy(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getTodosWithCategories = async  (req, res) => {
    try {
        const {id} = req.params

        const result = await TodosServices.getWithCategories(id)

        res.status(200).json({
            message: 'Enviando tareas con categorias',
            data: result})

    } catch (error) {
        res.status(400).json({

            error:error.message,
            
            details: error.stack,
        })
    }
}

module.exports = {
    getAllTodos,
    getTodosById,
    createTodo,
    updateTodo,
    deleteTodo,
    getTodosWithCategories
}