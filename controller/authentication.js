const User = require("../models/user");

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // See if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {});

  // If a user with email does exist, return an error

  // If a user with email does NOT exist, create and save user record
};
