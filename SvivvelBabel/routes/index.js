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

router.get("/word/delete/:_id", function(req, res){
	Words.remove({"_id" : req.params._id}, function(err){
		if(err){
			res.status(400).send("Bas request");
		}else{
			res.send("Success: Entity deleted");
		}
	});
});


router.get("/word/list", function(req, res) {
	mongoose.model("words").find(function(err, words){
		res.send(words);
	});
	console.log("bajspatte");
});

router.get('/newword', function(req, res) {
  res.render('newword');
});

module.exports = router;
