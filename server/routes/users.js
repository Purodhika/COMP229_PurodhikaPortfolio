/*
File: users.js
Name: Purodhika Sharma
Student ID: 301223212
Date: 03-06-22
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
