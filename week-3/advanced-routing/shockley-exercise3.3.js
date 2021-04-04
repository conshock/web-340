/*
============================================
; Title: Exercise 3.3
; Author: Conner Shockley
; Date: 4/3/21
; Description: This program sets up a basic
; Node webserver on port 8080 and adds
; advanced routing.
;===========================================
*/

const express = require("express");
const http = require("http");
const path = require("path");

const logger = require("morgan");

const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/:productId", function(req, res) {
    let productId = parseInt(req.params.productId, 10);
    
    res.render("index", {
        productId: productId
    });
});

http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080");    
});
