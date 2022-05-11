const express = require('express');
const path = require('path');
const userController = require('../controllers/userController')
const sessionController = require('../controllers/sessionController')
const cookieController = require('../controllers/cookieController')
const router = express.Router();


router.post('/signup', userController.createUser, sessionController.createSession, cookieController.setCookie, (req, res) => {
  return res.redirect('/');
})


router.post('/login', userController.verifyUser, sessionController.createSession, cookieController.setCookie, (req, res) => {
  return res.redirect('/');
})


router.get('/logout', cookieController.getCookie, sessionController.removeSession, cookieController.clearCookie, (req, res) => {
  return res.redirect('/');
})


router.get('/verifylogin', cookieController.getCookie, sessionController.verifySession, (req, res) => {
  return res.status(200).json({username: 'someusername', loggedIn: true})
})

module.exports = router;
