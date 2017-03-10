
var express = require('express');
var Account = require('../models/account'); // linking to the existing Account model
var router = express.Router();

// auth check
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next(); // user is logged in, so  call the next function
    }

    res.redirect('/'); // not logged in so redirect to home
}

/* GET users listing. */
router.get('/', isLoggedIn, function(req, res, next) {

    //use mongoose model to query mongodb for all users
    Account.find(function (err, users) {
        if(err) {
            console.log(err);
            res.end(err);
            return;
        }
        // no error so send the users to the index view
        res.render('users', {
            users: users,
            title: 'Users list',
            user: req.user
        });
    });
 // res.send('respond with a resource');

  // account.find
    //display view
    //users.ejs similar to books view
    //add a link in the header.ejs
});

module.exports = router;
