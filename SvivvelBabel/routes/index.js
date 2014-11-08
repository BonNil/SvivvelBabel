var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get("/kuk", function(reg, res) {
	res.render("skitfitta")
	console.log("FITTANEGERKUKUKUKUK")
});

module.exports = router;
