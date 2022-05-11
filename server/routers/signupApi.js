const express = require('express');
const path = require('path');
const signupController = require('../controllers/signupController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

const router = express.Router();

// localhost:3000/signup
router.post('/', signupController.createUser, sessionController.createSession, cookieController.setCookie, (req, res) => {
  return res.redirect('/');
})
// localhost:3000/signup/hello
router.post('/hello', (req, res) => {
  return res.sendStatus(200)
})

module.exports = router;