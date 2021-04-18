/*
============================================
; Title: Exercise 5.2
; Author: Conner Shockley
; Date: 4/18/21
; Description:
;===========================================
*/

// Require statements.
let express = require('express');
let http = require('http');
let path = require('path');
let logger = require("morgan");

// Variable to start the application.
let app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger("short"));

// Standard req and res function.
app.get("/", function (req, res) {
    res.render("index", {
        title: "Home page"
    });
});

// Creating server.
http.createServer(app).listen(3000, function() {
    console.log('Application started on port 3000.')
})