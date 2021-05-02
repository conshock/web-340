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

// Variable to start the application.
const app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger("short"));

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

// New Employee data.
let employee = new Employee({

    firstName: "Conner",
    lastName: "Shockley"

});

// Creating server.
http.createServer(app).listen(3000, function() {
    console.log('Application started on port 3000.')
})