const express = require('express');
const route = express.Router();

const userRoute = require('./user-route');
const todoRoute = require('./todo-route');
const authRoute = require('./auth-route');

//route default
route.get('/', (req, res) => {
  res.json('ini dari express mongoose');
});

route.use('/auth', authRoute);
route.use('/user', userRoute);
route.use('/todos', todoRoute);

module.exports = route;
