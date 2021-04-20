// Require statements
var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://admin:admin@buwebdev-cluster-1.0yvub.mongodb.net/test';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function() {
    console.log('Application connected to mLab');
});

var app = express();
app.use(logger('dev'));

http.createServer(app).listen(3000, function () {
    console.log('Application started and listening on port 3000');
});