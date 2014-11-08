var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
require("../Models/words");
var Words = require("mongoose").model("words");

/* GET home page. */
router.get('/', function(req, res) {
  	res.render('index', { title: 'Express' });
});

router.put("/word/new", function(req, res) {
	console.log("ny bajspatte")
	var word = new Words(req.body);
	word.save(function(err){
		if(err){
			console.log("Something went wrong", err);
		}else{
			console.log("The word is: ", word);
			res.send(word);
		}
	});
});

router.get("/word/list", function(req, res) {
	mongoose.model("words").find(function(err, words){
		res.send(words);
	});
	console.log("bajspatte");
});

module.exports = router;
