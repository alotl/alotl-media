const express = require('express');
const path = require('path');
// const { router } = require('./server');
const userController = require('./userController')

const router = express.Router();

router.post('/', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.user)
})
router.get('/', userController.findUser, (req, res) => {
  return res.status(200).json(res.locals.user)
})

module.exports = router;