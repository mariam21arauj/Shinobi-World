// Require Dependencies
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon')
const logger = require('morgan');

// Access environmental variables
require('dotenv').config();

// Connect to database
require('./config/database')

// Initialize App Express
const app = express();

// Mount Middleware
app.use(logger('dev'));
app.use(express.json());

// Configure both serve=favicon & static middlware to serve from the production build folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// API routes, before "catch all" routes
app.use('/api/users', require('./routes/api/users'));

// "Catch all" route. Returns the intdex.html on all non-AJAX requests. 
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

console.log('sanityCheck')
// Configuring port 3001 instead of 3000 during development
//  to avoide collision with React's dev server 
const port = process.env.PORT || 3001
app.listen(port, function(){
    console.log(`Express app running on port ${port}`)
})



