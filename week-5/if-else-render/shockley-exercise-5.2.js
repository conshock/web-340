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

// Require statements to make sure express, http, and morgan are going to run.
let express = require('express');
let http = require('http');
let path = require('path');


// Variable to start the application.
let app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Local composer array.
let composers = [
    'Bach',
    'Mozart',
    'Beethoven',
    'Verdi'
];

// Routes.
app.get('/', function(req, res) {
    res.render('index', {
        names: composers
    });    
});

// Creating server.
http.createServer(app).listen(3000, function() {
    console.log('Application started on port 3000.')
})