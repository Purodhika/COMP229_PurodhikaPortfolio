// <!--
// Name: Purodhika Sharma
// Student ID: 301223212
// Date: 26-06-22
// -->
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to our business model
let Business = require('../models/business');

let businessController = require('../controllers/business');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in 
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* Get Route for the business List page ; READ Operation */
router.get('/', businessController.displayBusinessList);

/* Get Route for displaying the Add page ; CREATE Operation */
router.get('/add', requireAuth, businessController.displayAddPage);

/* POST Route for processing the Add page ; CREATE Operation */
router.post('/add', requireAuth, businessController.processAddPage);

/* GET Route for processing the Edit page ; UPDATE Operation */
router.get('/edit/:id', requireAuth, businessController.displayEditPage);

/* POST Route for processing the Edit page ; UPDATE Operation */
router.post('/edit/:id', requireAuth, businessController.processEditPage);

/* GET to perform Deletion ; DELETE Operation */
router.get('/delete/:id', requireAuth, businessController.performDelete); 

module.exports = router;