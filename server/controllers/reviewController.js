const db = require('../models/model.js');

const reviewController = {};

reviewController.createReview = (req, res, next) => {


  // console.log('getting to createReview')
  const { user_id, review, rating } = req.body;
  const mediaId = res.locals.mediaId;
  // console.log('review and rating: ', review, rating, '\n')
  // console.log('res.locals: ', res.locals);
  const query =
    `INSERT INTO "public"."reviews" ("user_id", "media_id", "review", "rating")
    VALUES ($1, $2, $3, $4)`;
  db.query(query, [user_id, mediaId, review, rating])
    .then(data => {
      // console.log('data.rows[0]: ', data.rows[0])
      // console.log('data.rows: ', data.rows)
      // res.locals.review = data.rows;
      // console.log('res.locals.review: ', res.locals.review)
      return next();
    })
    .catch(err => {
      const errorObj = {
        log: 'error in mediaController.createReview',
        message: `server error ${err} `
      };
      return next(errorObj);
    })
}