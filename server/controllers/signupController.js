let db = require('../models/model.js');
const bcrypt = require('bcryptjs');
const { user } = require('pg/lib/defaults');
const SALT = 5; // make larger for added security

const signupController = {};

signupController.createUser = (req, res, next) => {
  db = require('../models/testmodel.js');
  console.log('req', req.bodies);
  const userName = req.bodies.username;
  const userPassword = req.bodies.password;
  const userPasswordConfirm = req.bodies.password;
  if (userPassword !== userPasswordConfirm) {
    console.log('password confirmation did not match')
    return next({ message: 'password confirmation did not match' });
  }

  bcrypt.hash(userPassword, SALT, function (err, hashedPassword) {
    // Store hash in your password DB.
    const query =
      `INSERT INTO "public"."public.User" ("username", "password")
      VALUES ('${userName}', '${hashedPassword}')`;
    db.query(query)
      .then(data => {
        res.locals.user = data.rows;
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
