/*
============================================
; Title:  shockley-assignment4.4.js
; Author: Conner Shockley
; Date:   April 10, 2021
; Description: Demonstrates CRUD operations in a
; Node.js API.
;===========================================
*/

// Require statements for Express and HTTP.
const express = require("express");
const http = require("http");

// Setting app to express function.
let app = express();
app.set("port", process.env.PORT || 3000);

// GET request.
app.get("/", function(req, res) {
  res.send("API invoked as an HTTP GET request.");
});

// PUT request.
app.put("/", function(req, res) {
  res.send("API invoked as an HTTP PUT request.");
});

// POST request.
app.post("/", function(req, res) {
  res.send("API invoked as an HTTP POST request");
});

// DELETE request.
app.delete("/", function(req, res) {
  res.send("API invoked as an HTTP DELETE request");
});

// Starting server on port 3000.
http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
