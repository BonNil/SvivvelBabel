var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var wordsSchema = new Schema({
	word : String,
	translations : {
		sv : String,
		de : String
	}
});

mongoose.model("words", wordsSchema);
module.exports = wordsSchema;