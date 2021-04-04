/*
============================================
; Title: Exercise 3.2
; Author: Conner Shockley
; Date: 4/3/21
; Description: This program sets up a basic
; Node webserver on port 8080 and adds
; an ejs index page and a morgan logger.
;===========================================
*/

// Standard require statements
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

// Start app.
let app = express();


app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("dev"));

// The below block starts the index.ejs page.
app.get("/", function(req, res) 
{
   res.render("index", {
       // The below will display in the index.ejs page.
       message: "Welcome to the Morgan example created by Conner Shockley!"
   });
});

// Initialize/create server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});