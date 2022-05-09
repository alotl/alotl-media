const express = require('express');
const path = require('path');
const userController = require('./userController')

const router = express.Router();

router.post('/', userController.createUser, (req, res) => {
  return res.sendStatus(200)
})

module.exports = router;