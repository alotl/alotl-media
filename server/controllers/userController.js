const db = require('../models/model.js');
const bcrypt = require('bcrypt');
const userController = {};
const SALT = 5; 



userController.createUser = (req, res, next) => {

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
          log: 'error in userController.createUser',
          message: `server error ${err}`
        };
        return next(errorObj);
      })
  });
};

userController.verifyUser = (req, res, next) => {

  const username = req.body.username;
  const password = req.body.password;
  
  const query =
    `SELECT password FROM "public"."public.User" WHERE username = '${username}'`

  db.query(query)
    .then(data => {
      //first argument is the
      //plain text password
      //second argument is the hashed text
      //that the hased first argument has to match
      //in order to make "result" true.

      bcrypt.compare(password, data.rows[0].password, function (err, result) {
        if (result) return next();
        console.log('Password does not match.');
        return next({message: 'Password does not match, try again.'});
      });
    })
    .catch(err => {
      const errorObj = {
        log: 'error in userController.findUser',
        message: `server error ${err} `
      };
      return next(errorObj);
    })
};


module.exports = userController;