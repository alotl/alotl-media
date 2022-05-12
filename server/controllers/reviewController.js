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


reviewController.recentReview = (req, res, next) => {
    const query = `SELECT "public"."public.User".username, "public"."public.Review".review, "public"."public.Review".rating, "public"."public.Media".title, "public"."public.Media".type
    FROM "public"."public.User"
    INNER JOIN "public"."public.Review"
    ON "public"."public.User"._id = "public"."public.Review".user_id
    INNER JOIN "public"."public.Media"
    ON "public"."public.Review".media_id = "public"."public.Media"._id
    ORDER BY "public"."public.Review"._id DESC LIMIT 20`;

    db.query(query)
    .then( data => {
      console.log(data.rows);
      res.locals.reviews = data.rows;
      return next();
    })

    
}


module.exports = reviewController;

