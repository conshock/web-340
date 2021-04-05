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

// Base require statements to start the app.
const express = require("express");
const http = require("http");
const path = require("path");

//
const logger = require("morgan");

const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(request, response) {
    response.render("index", {
        message: "home page"
    });
});

app.get("/about", function(request, response) {
    response.render("about", {
        message: "about page"
    });
});

app.get("/contact", function(request, response) {
    response.render("contact", {
        message: "contact page"
    })
});

app.get("/products", function(request, response) {
    response.render("products", {
        message: "products page"
    });
 });

http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080");    
});