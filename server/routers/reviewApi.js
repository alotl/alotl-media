const express = require('express');
const path = require('path');
// const mediaController = require('../controllers/mediaController');
const reviewController = require('../controllers/reviewController');
const router = express.Router();

// router.post('/', mediaController.findMedia, mediaController.createMedia, mediaController.findUser, mediaController.createReview, (req, res) => {
//   return res.status(200).json(res.locals.review)
// });

router.get('/recentReview', reviewController.recentReview, (req, res) => {
  return res.status(200).json(res.locals.reviews)
});


// router.get('/api/review/recentBooksReview', reviewController.recentBookReview, (req, res) => {
//   return res.status(200).json(res.locals.reviews)
// });


// router.get('/api/review/recentMoviesReview', reviewController.recentMovieReview, (req, res) => {
//   return res.status(200).json(res.locals.reviews)
// });


// router.get('/api/review/recentMusicReview', reviewController.recentMusicReview, (req, res) => {
//   return res.status(200).json(res.locals.reviews)
// });


// router.get('/api/review/:id', reviewController.recentMusicReview, (req, res) => {
//   return res.status(200).json(res.locals.reviews)
// });





module.exports = router;