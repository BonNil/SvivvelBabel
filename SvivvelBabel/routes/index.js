var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
require("../Models/words");
var Words = require("mongoose").model("words");




// route the routable routing routes
// ----------------------------------------------

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

<<<<<<< HEAD
router.delete("/word/delete/:_id", function(req, res){
=======

router.get("/word/edit", function(req, res){
	
	console.log("HÄR E JAG HÄR E JAG HÄR E JAG");

	if(req.body._id){
		var id = req.body._id;
		var updateData = req.body;
		delete updateData._id;
		console.log(req.body, nWord, updateData);

		// perform the edit
		Words.update({"_id" : id}, updateData, function(err){
			if(err){
				res.send("Failure: Failed to edit object: " + req.body);
			}
		})
	} else {
		res.send("Failure: something went wrong, cannot edit");
	}
});


router.get("/word/delete/:_id", function(req, res){
>>>>>>> added /word/random and /word/validate(untested)
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


router.get("/word/random", function(req, res){
	Words.count(function(err, count){
		console.log("the count is: " + count);
		var rand = Math.floor(Math.random() * count);
		Words.findOne().skip(rand).exec(function(err, word){
			if(err){
				res.send("Failure: Something went wrong");
				console.log(err);
			}else{
				res.send(word);
				console.log(word);
			}
		});
	});
});


router.get("/word/validate", function(req, res){
	if(!req.body._id){
		res.status(400).send("Invalid ID");
		console.log("Invalid ID")
	}
	if(!req.body.lang){
		res.status(400).send("Invalid language");
		console.log("Invalid language")
	}
	if(!req.body.guess){
		res.status(400).send("Invalid guess");
		console.log("Invalid guess")
	}
		Words.findOne({"_id" : req.body._id}, function(err, word){
			if(word){
				if(req.body.lang == "sv"){
					if (req.body.guess == word.translation.sv){
						res.send("CORRECT");
					}else{
						res.send("INCORRECT");
					}
				}
				if(req.body.lang == "de"){
					if (req.body.guess == word.translation.de){
						res.send("CORRECT");
					}else{
						res.send("INCORRECT");
					}
				}
			}
			if(err){
				res.send("Failure: Something went wrong");
				console.log(err);
			}
		});
});


router.get('/newword', function(req, res) {
  res.render('newword');
});

router.get('/editword', function(req, res) {
  res.render('editword');
});

// ----------------------------------------------


module.exports = router;
