const express = require('express');
const path = require('path');
// const { router } = require('./server');
const userController = require('./userController')

const router = express.Router();

router.post('/', userController.createUser, (res, req) => {
  return res.status(200).json(res.locals.user)
})

module.exports = router;