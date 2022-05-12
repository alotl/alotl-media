let db = require('../models/model.js');
const bcrypt = require('bcrypt');
const userController = {};
const SALT = 5; 





userController.createUser = (req, res, next) => {
  const userName = req.body.username;
  const userPassword = req.body.password;
  const userPasswordConfirm = req.body.password2;

  const isInputValid = (userName, userPassword, userPasswordConfirm) => {
    if (!userName || !userPassword || typeof userName !== 'string' || typeof userPassword !== 'string' || userPassword !== userPasswordConfirm) {
      return false;
    }
    return true;
  }

  const inputValidationResult = isInputValid(userName, userPassword, userPasswordConfirm);
  
  if (process.env.MODE === 'test'){
    db = require('../models/testmodel.js'); 
    if (!inputValidationResult){
      return new Error('username and password must be a string and defined');
    }
  } else {
    if (!inputValidationResult){
      return next({message:'Input is not valid, please try again.'});
    }
  }

  bcrypt.hash(userPassword, SALT, function (err, hashedPassword) {
    // Store hash in your password DB.
    const query =
      `INSERT INTO "public"."public.User" ("username", "password")
      VALUES ('${userName}', '${hashedPassword}')`;
    db.query(query)
      .then(data => {
        if (process.env.MODE === 'test') {
          console.log('created')
          return data;
        }
        return next();
      })
      .catch(err => {
        const errorObj = {
          log: 'error in userController.createUser',
          message: `server error ${err}`
        };
        if (process.env.MODE === 'test') return new Error('User was not created');
        return next(errorObj);
      })
  });
};

userController.verifyUser = (req, res, next) => {

  const username = req.body.username;
  const password = req.body.password;
  
  if (process.env.MODE === 'test'){
    db = require('../models/testmodel.js'); 
  } else {

  }

  // if()
  
  const query =
    `SELECT password FROM "public"."public.User" WHERE username = '${username}'`;
  

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