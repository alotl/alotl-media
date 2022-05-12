const db = require('../models/model.js');

const mediaController = {};

mediaController.getMediaIdByTitle = (req, res, next) => {
  const {title, type} = req.body;
  //syntax?
  const query = 'SELECT _id FROM "public"."public.Media" WHERE (title=$1, type=$2)';
  db.query(query, [title, type])
    .then(data => {
      console.log(data);
      if(!data.rows[0]) {
        res.locals.mediaFound = false;
        return next();
      }
      res.locals.mediaFound = true;
      res.locals.mediaId = data.rows[0]._id;
      return next();
    })
    .catch(err => {
      const errorObj = {
        log: 'error in mediaController.createMedia',
        message: `server error ${err} `
      };
      return next({errorObj});
    })
}

mediaController.createMedia = (req, res, next) => {
  //if media already exists return next
  if (res.locals.mediaFound === true) return next();
  const {title, type} = req.body;
  const query =
    'INSERT INTO "public"."Media" ("title", "type") VALUES ($1, $2) RETURNING _id';
  db.query(query, [title, type])
    .then(data => {
      // console.log('data in createMedia: ', data)
      res.locals.mediaId = data.rows[0]._id;
      // console.log(res.locals.user);
      return next();
    })
    .catch(err => {
      const errorObj = {
        log: 'error in mediaController.createMedia',
        message: `server error ${err} `
      };
      return next(errorObj);
    })
}


// check if media exists
// if media does not exist, put into table
// if media does exist or after creating media, get media id
// create review connecting user id, media id, and rest of post request

// mediaController.findMedia = (req, res, next) => {
//   const media = req.body;
//   // console.log('media: ', media);
//   // console.log('properties', media.type, media.title)
//   const findMediaQuery = `SELECT * FROM "public"."Media" WHERE type = '${media.type}' AND title = '${media.title}'`

//   db.query(findMediaQuery)
//     .then(data => {
//       // console.log('data.rows: ', data.rows)
//       // console.log((data.rows[0] == undefined))
//       // console.log('has property _id: ', data.rows[0]._id);
//       // if (data.rows[0].hasOwnProperty('_id')) {
//       if (data.rows[0] != undefined) {
//         res.locals.mediaId = data.rows[0]._id;
//         // console.log('res.locals.mediaId: ', res.locals.mediaId);
//       } else {
//         res.locals.mediaId = null;
//       }
//       return next();
//     })
//     .catch(err => {
//       const errorObj = {
//         log: 'error in mediaController.findMedia',
//         message: `server error ${err} `
//       };
//       return next(errorObj);
//     })
// }


// mediaController.findUser = (req, res, next) => {
//   // hardcoding in as user antonio :)
//   //   const user = req.body.username;
//   // console.log('finding user')
//   const user = 'antonio';

//   const findUserQuery =
//     `SELECT * FROM "public"."User" WHERE username = '${user}'`

//   db.query(findUserQuery)
//     .then(data => {
//       // console.log('data.rows[0] ', data.rows[0])
//       res.locals.userId = data.rows[0]._id;
//       return next();
//     })
//     .catch(err => {
//       const errorObj = {
//         log: 'error in mediaController.findUser',
//         message: `server error ${err} `
//       };
//       return next(errorObj);
//     })
// };

// mediaController.createReview = (req, res, next) => {


//   // console.log('getting to createReview')
//   const { review, rating } = req.body;
//   // console.log('review and rating: ', review, rating, '\n')
//   // console.log('res.locals: ', res.locals);
//   const createReviewQuery =
//     `INSERT INTO "public"."reviews" ("user_id", "media_id", "review", "rating")
//     VALUES (${res.locals.userId}, ${res.locals.mediaId}, '${review}', '${rating}')`;
//   db.query(createReviewQuery)
//     .then(data => {
//       // console.log('data.rows[0]: ', data.rows[0])
//       // console.log('data.rows: ', data.rows)
//       res.locals.review = data.rows;
//       // console.log('res.locals.review: ', res.locals.review)
//       return next();
//     })
//     .catch(err => {
//       const errorObj = {
//         log: 'error in mediaController.createReview',
//         message: `server error ${err} `
//       };
//       return next(errorObj);
//     })
// }




module.exports = mediaController;