/*
============================================
; Title: Assignment 2.2
; Author: Conner Shockley
; Date: 3/28/21
; Description: This program sets up a basic
; Node webserver on port 8080.
;===========================================
*/
var express = require("express");
var http = require("http");

var app = express();


// routes
app.get('/', function (req, res) 
{
    res.end('Welcome to the homepage.\n');
});

app.get('/about', function (req,res) 
{
    res.end('Welcome to the about page.\n');
});

app.get('/contact', function (req,res) 
{
    res.end('Welcome to the contact page.\n');
});


// Route for bad request.
app.use(function (req,res) 
{
    res.statusCode = 404;
    res.end('404!\n');
});


// Create Node server.
http.createServer(app).listen(3000, function ()
{
    console.log("Application started on port %s", 3000);
});