/*
============================================
; Title: Assignment 4.2
; Author: Conner Shockley
; Date: 4/10/21
; Description: This program sets up a basic
; json-api on port 3000.
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


// Variable to return JSON data based on the URL requested.
app.get('/customer/:id', function(req, res) {
    let id = parseInt(req.params.id, 10);

    res.json({
        firstName: 'Conner',
        lastName: 'Shockley',
        employeeId: id
    });

});

// Starting HTTP server on port 3000.
http.createServer(app).listen(3000, function() {
    console.log('Application started and listening on port 3000')
});