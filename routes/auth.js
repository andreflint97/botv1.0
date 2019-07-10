//////////////////// IMPORTS ////////////////////////////////////////////////////////////////////
var authController = require('../controllers/authcontroller.js');
var db = require("../models");
var moment = require('moment');
var Sequelize = require("sequelize");
var Op = Sequelize.Op;
module.exports = function (app, passport) {
    //////////////////// IS LOGGED IN CHECK ////////////////////////////////////////////////////////////////
    function isLoggedIn(req, res, next) {
        // console.log(req);
        if (req.isAuthenticated()) {
            return next();
        } else { res.redirect('/signin') };
    }
    //////////////////// HTML Routes //////////////////////////////////////////////////////////////////////
    app.get('/', authController.signin);
    app.get('/home', authController.signin);
    app.get('/login', authController.signin);
 
    //////////////////// HOME /////////////////////////////////////////////////////////////////////////////
    app.get('/home', isLoggedIn, authController.home);

    //////////////////// POST NEW USER ////////////////////////////////////////////////////////////////////
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home',
        failureRedirect: '/index'
    }));
    //////////////////// LOGOUT ///////////////////////////////////////////////////////////////////////////
    app.get('/logout', authController.logout);
    //////////////////// SIGN IN POST /////////////////////////////////////////////////////////////////////
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/home',
        failureRedirect: '/index'
    }));
}