const db = require('../models/model.js');

const reviewController = {};


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