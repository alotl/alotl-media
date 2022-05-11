const db = require('../models/model.js');
const bcrypt = require('bcrypt');
const { user } = require('pg/lib/defaults');
const SALT = 5; // make larger for added security

const signupController = {};

signupController.createUser = (req, res, next) => {

  const userName = req.body.username;
  const userPassword = req.body.password;
  const userPasswordConfirm = req.body.password2;
  if(userPassword !== userPasswordConfirm) {
    console.log('password confirmation did not match')
    return next({message:'password confirmation did not match'});
  }

  bcrypt.hash(userPassword, SALT, function (err, hashedPassword) {
    // Store hash in your password DB.
    const query =
      `INSERT INTO "public"."public.User" ("username", "password")
      VALUES ('${userName}', '${hashedPassword}')`;
    db.query(query)
      .then(data => {
        return next();
      })
      .catch(err => {
        const errorObj = {
          log: 'error in signupController.createUser',
          message: `server error ${err}`
        };
        return next(errorObj);
      })
  });
};

module.exports = signupController;
