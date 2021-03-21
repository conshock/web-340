/*
============================================
; Title: Exercise 1.3
; Author: Conner Shockley
; Date: 3/21/2021
; Description: This node.js program will parse 
; the given URL and log the protocol, host, and query.
;===========================================
*/

const url = require('url');

const parsedURL = url.parse('https://conshock.github.io/web-330/?fake-query');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);