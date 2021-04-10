/*
============================================
; Title: Assignment 4.2
; Author: Conner Shockley
; Date: 4/10/21
; Description: This program sets up a basic
; json-api on port 3000 and is set to return
; status codes.
;===========================================
*/

// Require statements to make sure express, http, and morgan are going to run.
let express = require('express');
let http = require('http');
let logger = require('morgan');


// Variable to start the application.
let app = express();

// Variable to use Morgan logger.
app.use(logger('dev'));

// GET requests using status codes.
// 404 code.
app.get('/not-found', function(req, res) {
    res.status(404);

    res.json({
        error: 'Resource not found.'
    });
});

// 200 code.
app.get('/ok', function(req, res) {
    res.status(200);

    res.json({
        error: 'Page loaded correctly.'
    });
});

// 501 code.
app.get('/not-implemented', function(req, res) {
    res.status(501);

    res.json({
        error: 'Page not implemented.'
    });
});

// Create server on port 3000.
http.createServer(app).listen(3000, function() {
    console.log('Application started on port 3000.')
})

