/*
============================================
; Title: Assignment 2.2
; Author: Conner Shockley
; Date: 3/28/21
; Description: This program sets up a basic
; Node webserver on port 3000 and adds
; ejs-views.
;===========================================
*/

// Standard require statements
const http = require("http");
const express = require("express");
const path = require("path");

// Start app.
let app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

// The below block starts the index.ejs page.
app.get("/", function(req, res) 
{
   res.render("index", {
       // The below will display in the index.ejs page.
       firstName: "Conner",
       lastName: "Shockley",
       address: "Fake Address"
   });
});

// Initialize/create server
http.createServer(app).listen(8080, function() {
    console.log("EJS-Views app started on port 8080.");
});
