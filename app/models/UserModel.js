
var mongoose     = require('mongoose'), db;
var dbConfig = require('../../config/db-config.js');

// Create Database connection
db = mongoose.createConnection(dbConfig.url, { useMongoClient: true, });

// Create schema for a user
var userSchema   = mongoose.Schema({
  name: String,
  surname: String,
  tsAdded: {
    type: Number,
    default: Date.now
  },
  tsModified: {
    type: Number,
    default: Date.now
  },
  birthday: Date,
  timezone: String,
  positionHeld: String
});

module.exports = db.model('test-users', userSchema);
