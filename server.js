var express = require('express');
var path = require('path');
var http = require('http');

var routes = require("./routes");
var bodyParser = require('body-parser');

var database = require('./config/mysql/db_connect');

//var addRecord = require('./scripts/database/addRecord');

var app = express();

var urlencodedParser = (bodyParser.urlencoded({ extended: true }));
var jsonParser = (bodyParser.json());

app.set("port", process.env.PORT || 3040);

app.set("views", path.join(__dirname, "views/"));

app.engine('ejs', require('ejs').renderFile);
app.set("view engine", "ejs")
app.use(routes);
//app.use(database);
//app.use(addRecord);

app.use(express.static(path.join(__dirname+'/public')));


// using post handler on test mode

app.post('/form', urlencodedParser, function(req, res) {
	//console.log(req.body)
	res.render('form', {qs: req.query});
	
	var squery = "insert into add_record(recordID, date, name, email, mobile, message, ecode) values(' ', ' ', '"+req.body.name+"', '"+req.body.email+"', '"+req.body.mobile+"', '"+req.body.notes+"', ' ')";
	
	database.query(squery, function(er, result){
		if(er) throw er;
		console.log('New record added.');
		//res.redirect('/form');
	});
});

app.listen(app.get("port"), function(){
	console.log("Server is ready to use on http://localhost:"+app.get("port"));
});