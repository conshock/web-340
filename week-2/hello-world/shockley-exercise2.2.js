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

app.use(function(req, res) {

   console.log("In comes a request to: %s", req.url);
   res.end("Hello World\n");

});


http.createServer(app).listen(8080, function ()
{
    console.log("Application started on port %s", 8080);
});