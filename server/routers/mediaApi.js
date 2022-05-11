const express = require('express');
const path = require('path');
const mediaController = require('../controllers/mediaController')

const router = express.Router();

router.post('/', mediaController.findMedia, mediaController.createMedia, mediaController.findUser, mediaController.createReview, (req, res) => {
  return res.status(200).json(res.locals.review)
})

module.exports = router;