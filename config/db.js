const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://adtynff:adit123@adtynf.ginwb0w.mongodb.net/todo_app';

const db = mongoose.connect(DB_URL);

module.exports = db;
