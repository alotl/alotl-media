const db = require('../models/model.js');
const bcrypt = require('bcrypt');
const SESSION_SALT = 2; // make larger for added security

const sessionController = {};

sessionController.createSession = (req, res, next) => {

  const username = req.body.username;
  
  bcrypt.hash(username, SESSION_SALT, function (err, hashedUsername) {
    
    const query = `UPDATE "public"."public.User"
    SET session = '${hashedUsername}'
    WHERE username = '${username}'
    RETURNING *`
      
    db.query(query)
      .then(data => {
        res.locals.ssid = data.rows[0].session;
        return next();
      })
      .catch(err => {
        const errorObj = {
          log: 'error in sessionController.createSession',
          message: `server error ${err}`
        };
        return next(errorObj);
      })
  });
};

sessionController.removeSession = (req, res, next) => {
  //set the session data to null in user table
  const ssid = res.locals.ssid;
  console.log('removeSession fired', res.locals.ssid);
  // Create a variable query DELETE public.session FROM public WHERE session=$1
  const query = 'UPDATE "public"."public.User" SET session= NULL WHERE session=$1'
  db.query(query, [ssid])
    .then(
     next()
    )
    .catch(err => {
      const errorObj = {
        log: 'error in sessionController.removeSession',
        message: `server error ${err}`
      }
      return next({errorObj})
    })
};

sessionController.verifySession = (req, res, next) => {
  //verify if the session data is in user table
  console.log('verifySession fired', res.locals.ssid);
  const ssid = res.locals.ssid;
  //prepared query string for sql db
  const query = 'SELECT _id, username FROM "public"."public.User" WHERE session=$1'
  db.query(query, [ssid])
    .then(data => {
      res.locals.user = data.rows[0].username
      res.locals.user_id = data.rows[0]._id
      return next()
    })
    .catch(err => {
      return res.redirect('/login')
    })
  
};
module.exports = sessionController;
