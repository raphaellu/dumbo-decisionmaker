/**
 * Introduction to Human-Computer Interaction
 * Lab 1
 * --------------
 * Created by: Michael Bernstein
 * Last updated: December 2013
 */
var PORT = 3000;

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
var express = require('express');
var http = require('http');
var path = require('path');
// var handlebars = require('express3-handlebars')

// var index = require('./routes/index');
// var project = require('./routes/project');
// Create the server instance
var app = express();

// Print logs to the console and compress pages we send
app.set('port', process.env.PORT || 3000);
app.set('views', (__dirname + '/static', 'views'));
// app.engine('handlebars', handlebars());
// app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger());
app.use(express.compress());
app.use(express.json());
app.use(express.urlencoded());
// app.use(express.methodOverride());
// app.use(express.session());
app.use(app.router);
// Return all pages in the /static directory
// whenever they are requested at '/'
// e.g., http://localhost:3000/index.html
// maps to /static/index.html on this machine
app.use(express.static(__dirname + '/static'));

// Start the server
var port = process.env.PORT || PORT; // 80 for web, 3000 for development
app.listen(port, function() {
	console.log("Node.js server running on port %s", port);
});