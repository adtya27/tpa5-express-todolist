const express = require('express');
const { getAllTodo, getTodoById, createTodo, editTodo, deleteTodo, deleteAllTodo } = require('../controllers/todo-controller');
const verifyToken = require('../middleware/auth');

const route = express.Router();

route.get('/', verifyToken, getAllTodo);
route.get('/:id', verifyToken, getTodoById);
route.post('/', verifyToken, createTodo);
route.delete('/:id', verifyToken, deleteTodo);
route.delete('/', verifyToken, deleteAllTodo);
route.put('/:id', verifyToken, editTodo);

module.exports = route;
