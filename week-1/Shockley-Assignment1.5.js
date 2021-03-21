/*
============================================
; Title: Assignment 1.5
; Author: Conner Shockley
; Date: 3/21/2021
; Description: First webserver! Returns "Hello world!"
; upon every request.
;===========================================
*/

const http = require("http");

function requestHandler(request, response)
{
    let body = "Hello World! Welcome to my Node web server!";

    let contentLength = body.length;
    response.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });

    response.end(body);
}

const server = http.createServer(requestHandler);

server.listen(3000);