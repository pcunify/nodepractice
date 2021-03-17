var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var app = express();


var dbs = require('../../config/mysql/db_connect');

app.post('/addFormData', function(req, res){
	
	var squery = "insert into add_record(recordID, date, name, email, mobile, message, ecode) values(' ', ' ', '"+req.body.name+"', '"+req.body.email+"', '"+req.body.mobile+"', '"+req.body.notes+"', ' ')";
	
	con.query(squery, function(er, result){
		if(er) throw er;
		console.log('New record added.');
		//res.redirect('/form');
	});
});

module.exports = router;