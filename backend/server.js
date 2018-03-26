'use strict'

var express = require('express'),
    bodyParser = require('body-parser'),
    mysql = require('mysql');

var app = express();

var connection = mysql.createConnection({
	host:'http://databusters.web.engr.illinois.edu',
	user:'databusters_admin',
	password:'databusters',
	database:'databusters_db'
	// port:'3306'
})

connection.connect(function(err){
	if(err) throw err;
	
	console.log("connected to mysql")
})
var port = process.env.PORT || 7002

app.listen(port)
console.log('Server running on port ' + port);