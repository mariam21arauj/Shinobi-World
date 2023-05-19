// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');

let user, item, category, order;
let users, items, categories, orders;
