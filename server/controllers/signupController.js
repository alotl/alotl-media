const db = require('../models/model.js');
const bcrypt = require('bcrypt');
const SALT = 5; // make larger for added security

const signupController = {};

signupController.createUser = (req, res, next) => {
  console.log('is it working', req.body);

  const userName = 'hihhihi';
  const userPassword = '00000000';
  console.log(userName, userPassword);
  
  // bcrypt.hash(userPassword, SALT, function (err, hashedPassword) {
  //   // Store hash in your password DB.
  //   const query =
  //     `INSERT INTO "public"."public.User" ("username", "password")
  //     VALUES ('${userName}', '${hashedPassword}')`;
  //   db.query(query)
  //     .then(data => {
  //       res.locals.user = data.rows;
  //       return next();
  //     })
  //     .catch(err => {
  //       const errorObj = {
  //         log: 'error in signupController.createUser',
  //         message: `server error ${err}`
  //       };
  //       return next(errorObj);
  //     })
  // });

  next();

};

module.exports = signupController;
