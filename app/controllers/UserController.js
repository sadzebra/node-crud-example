var User = require('../models/UserModel.js');

/*
  Add a new user
*/
exports.create = function(req, res) {

    if(!req.body) {
        res
          .status(400)
          .send({
            result: "error",
            message: "User data can't be empty"
          });
    }

    // Build new user model
    var user = new User({
			name: req.body.name,
		  surname: req.body.surname,
      birthday: req.body.birthday,
      timezone: req.body.timezone,
      positionHeld: req.body.positionHeld
		});

    user.save(function(err, data) {
        if(err) {
            res
              .status(500)
              .send({
                result: "error",
                message: "Couldn't create new user.",
                error: err
              });
        }
        else {
            res.send({
              result: "success",
              data
            });
        }
    });
};

/*
  Gets all the users stored in the database
*/
exports.getAll = function(req, res) {

    User.find(function(err, data){
        if(err) {
            res
              .status(500)
              .send({
                result: "error",
                message: "Couldn't find users."
              });
        }
        else {
            res.send({
              result: "success",
              data
            });
        }
    });
};

/*
  Gets a single user based on user ID
*/
exports.getSingle = function(req, res) {

    User.findById(req.params.userId, function(err, data) {
        if(err) {
            res
              .status(500)
              .send({
                result: "error",
                message: "Could't find user. id: " + req.params.userId,
                error: err
              });
        }
        else {
            res.send({
              result: "success",
              data
            });
        }
    });
};

/*
  Updates a user based on input and ID
*/
exports.update = function(req, res) {

    User.findById(req.params.userId, function(err, user) {
        if(err) {
            res
              .status(500)
              .send({
                result: "error",
                message: "Could't find user. id: " + req.params.userId,
                error: err
              });
        }

        // If i field is empty ignore it
        if(req.body.name)
          user.name = req.body.name;
        if(req.body.surname)
          user.surname = req.body.surname;

        user.save(function(err, data){
            if(err) {
                res
                  .status(500)
                  .send({
                    result: "error",
                    message: "Could't update user. id: " + req.params.userId,
                    error: err
                  });
            }
            else {
                res.send({
                  result: "Success",
                  data
                });
            }
        });
    });
};

/*
  Deletes a user based on its ID
*/
exports.delete = function(req, res) {

    User.remove({_id: req.params.userId}, function(err, data) {
        if(err) {
            res
              .status(500)
              .send({
                result: "error",
                message: "Could't delete user. id: " + req.params.userId,
                error: err
              });
        }
        else {
            res.send({
              result: "success",
              message: "User was deleted successfully!"
            })
        }
    });
};
