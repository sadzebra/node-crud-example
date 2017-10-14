var express = require('express');
var bodyParser = require('body-parser');

// create express app
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
var dbConfig = require('./config/db-config.js');
var mongoose = require('mongoose');

// var connection = mongoose.createConnection(dbConfig.url, { useMongoClient: true, });

// Check for DB connection errors
mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// Connect to DC
mongoose.connection.once('openurl', function() {
    console.log("Successfully connected to the database");
})

require('./app/routes/User.js')(app);

// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});
