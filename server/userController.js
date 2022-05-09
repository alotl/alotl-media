const db = require('./model.js');

const userController = {};

userController.createUser = (req, res, next) => {
  const newUser = req.body;

  console.log('newUser: ', req.body);
  const createQuery =
    `INSERT INTO "public"."User" ("username", "password")
    VALUES ('${newUser.username}', '${newUser.password}')`;

  db.query(createQuery)
    .then(data => {
      res.locals.user = data.rows;
      // console.log(res.locals.user);
      return next();
    })
    .catch(err => {
      const errorObj = {
        log: 'error in userController.createUser',
        message: `server error ${err}`
      };
      return next(errorObj);
    })
};

userController.findUser = (req, res, next) => {
  const newUser = req.body;
  console.log(newUser);
  const findQuery =
    // `SELECT * FROM "public"."User"`;
    // `SELECT * FROM "public"."User" WHERE username = 'antonio'`
    `SELECT * FROM "public"."User" WHERE username = '${newUser.username}' AND password = '${newUser.password}'`


  db.query(findQuery)
    .then(data => {
      res.locals.user = data.rows;
      // console.log(res.locals.user);
      return next();
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