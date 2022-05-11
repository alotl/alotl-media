const express = require('express');
const path = require('path');
const signupController = require('../controllers/signupController')

const router = express.Router();

// localhost:3000/signup
router.post('/', signupController.createUser, (req, res) => {
  console.log('hi');
  return res.status(200).json({hi:'helloe'})
})
// localhost:3000/signup/hello
router.post('/hello', (req, res) => {
  return res.sendStatus(200)
})

module.exports = router;