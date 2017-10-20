module.exports = function(app) {

    var UserController = require('../controllers/UserController.js');

    // Creates a new user
    app.post('/user', UserController.create);
    // gets all the users
    app.get('/user', UserController.getAll);
    // Gets a single user
    app.get('/user/:userId', UserController.getSingle);

    /*
      Update and delete weren't specified in the tech specs but have been
      implemented however no unit tests have been projected for them.
    */
    
    // Updates the a user
    app.put('/user/:userId', UserController.update);
    // Deletes a user
    app.delete('/user/:userId', UserController.delete);
}
