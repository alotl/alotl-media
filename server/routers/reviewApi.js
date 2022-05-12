const express = require('express');
const path = require('path');
const cookieController = require('../controllers/cookieController');
const mediaController = require('../controllers/mediaController')
const sessionController = require('../controllers/sessionController')
const reviewController = require('../controllers/reviewController')

const router = express.Router();
// original route maybe of use later 
// router.post('/', mediaController.findMedia, mediaController.createMedia, mediaController.findUser, mediaController.createReview, (req, res) => {
//   return res.status(200).json(res.locals.review)
// })

// create router for create review (/api/review/createreview)
router.post('/createreview', 
  cookieController.getCookie, 
  sessionController.verifySession, 
  mediaController.getMediaIdByTitle,
  mediaController.createMedia,
  reviewController.createReview,
  (req, res) => {
    // redirect to what route?
    res.redirect('/home')
  }
  )


module.exports = router;