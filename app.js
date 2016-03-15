var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());



// set your routes 

var route = require('./route')(app);


// set your port

var port = process.env.PORT || 8800 ;

module.exports = app;

// start the server 

app.listen(port);

console.log("Start the server : "+ port );	