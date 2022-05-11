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

module.exports = sessionController;
