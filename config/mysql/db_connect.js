var mysql = require('mysql');

var HOST = 'localhost';
//var PORT = 3307;
var USER = 'root';
var PASS = 'sarahbits';
var DB_NAME = 'test_projects';


var con = mysql.createConnection({
	host: HOST,
	//port: PORT,
	user: USER,
	password: PASS,
	database: DB_NAME,
});

con.connect(function(er) {
	if(er) throw er;
	console.log("Database connected !!!");
});

module.exports = con;