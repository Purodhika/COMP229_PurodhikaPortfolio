/*
File: /routes/index.js
Name: Purodhika Sharma
Student ID: 301223212
Date: 03-06-22
*/

var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

/* GET products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Service' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
