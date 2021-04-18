/*
============================================
; Title: Exercise 5.2
; Author: Conner Shockley
; Date: 4/17/21
; Description: This program sets up a basic
; json-api on port 3000 and is set to return
; status codes.
;===========================================
*/

// Require statements.
let express = require('express');
let http = require('http');
let path = require('path');
let pug = require('pug');

// Variable to start the application.
let app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

// Route.
app.get('/', function(req, res) {
    res.render('index', {
        message: 'All we have to decide is what to do with the time that is given us. -Gandalf'
    });
});

// Creating server.
http.createServer(app).listen(3000, function() {
    console.log('Application started on port 3000.')
})
