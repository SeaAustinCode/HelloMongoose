const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
	{ //takes in an object as its parameter
	setup: { 
		type: String, 
		required: [true, "Setup is required"],
		minlength: [10, "Setup must be at least 10 characters long"]
	},
	
	punchline: {
		type: String,
		required: [true, "Punchline is required"],
		minlength: [3, "Punchline must be at least 10 characters long"]
	}
},
{ timestamps: true }

);

const Joke = mongoose.model("Joke", JokeSchema); //create a user variable to export and set it to the returned value of the mongoose.model function: a model object which enables all CRUD functionality

module.exports = Joke;