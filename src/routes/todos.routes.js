const { Router } = require('express');
const { getAllTodos, getTodosById, createTodo, updateTodo, deleteTodo, getTodosWithCategories } = require('../controllers/todos.controller');






const router = Router();

router.get('/todos', getAllTodos)

router.get('/todos/:id', getTodosById)

router.get('/todos/:id/categories', getTodosWithCategories)

router.post('/todos', createTodo)

router.put('/todos/:id', updateTodo)

router.delete('/todos/:id', deleteTodo)
module.exports = router
