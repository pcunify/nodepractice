var express = require('express');

var router = express.Router();

router.get("/", function(req, res){
	//console.log("First text is here");
	res.render('index')
});


router.get("/about", function(req, res){ res.render('about') });
router.get("/form", function(req, res){ res.render('form') });
//router.get("/form", function(req, res){ res.render('./scripts/database/addRecord') });

module.exports = router;