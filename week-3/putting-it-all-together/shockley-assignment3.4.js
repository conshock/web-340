/*
============================================
; Title: Assignment 3.4
; Author: Conner Shockley
; Date: 4/3/21
; Description: This program sets up a basic
; Node webserver on port 8080 and adds
; advanced routing, HTTP requests, Express 
; middleware, logging, and sending data.
;===========================================
*/

// Base require statements for express, http, path, and Morgan logger.
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");

// Variable to initialize application.
const app = express();

// Setting up ejs view engine and pointing to the views folder for content.
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Setup logger.
app.use(logger("short"));

// Each app.get sets up the message that will display for the respective page.
// App.get for home/index page.
app.get("/", function(request, response) {
    response.render("index", {
        message: "home page"
    });
});

// App.get for about page.
app.get("/about", function(request, response) {
    response.render("about", {
        message: "about page"
    });
});

// App.get for contact page.
app.get("/contact", function(request, response) {
    response.render("contact", {
        message: "contact page"
    })
});

// App.get for products page.
app.get("/products", function(request, response) {
    response.render("products", {
        message: "products page"
    });
 });

// Creating web server on port 8080.
http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080");    
});