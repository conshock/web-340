/*
============================================
; Title: Exercise 5.2
; Author: Conner Shockley
; Date: 4/18/21
; Description:
;===========================================
*/

// Require statements.
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require("morgan");
const mongoose = require('mongoose');
const Employee = require('./models/employees');
const helmet = require("helmet");
const csrf = require("csurf");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Variable to start the application.
const app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger("short"));
app.set('port', process.env.PORT || 8080);

// CSRF protection.
const csrfProtection = csrf({cookie: true});

// Use statement for body-parser.
app.use(bodyParser.urlencoded({
    extended: true
}));

// Cookie-parser and csrf protection functions.
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});

// Use statement for helmet(XSS).
app.use(helmet.xssFilter());

// HTTP call for helmet.
app.get("/", function(request, response) {
    response.render("index", {
        message: "XSS Prevention Example"
    });
});

// MongoDB connection.
const mongoDB = 'mongodb+srv://admin:admin@buwebdev-cluster-1.0yvub.mongodb.net/test';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error: '));
    db.once('open', function() {
    console.log('Application connected to MongoDB');
});

// Standard req and res function.
app.get("/", function (req, res) {
    res.render("index", {
        title: "Home page"
    });
});

// Routing for New page
app.get("/new", function(request, response) {
    response.render("new", {
        message: "New Entry Page"
        title: 'EMS | New'
    });
});

app.post("/process", function(request, response) {
    console.log(request.body.txtName);
    response.redirect("/");
});

// New Employee data.
let employee = new Employee({

    firstName: "Conner",
    lastName: "Shockley"

});

// Creating server.
http.createServer(app).listen(app.get('port'), function() 
    { console.log('Application started on port ' + app.get('port')) });