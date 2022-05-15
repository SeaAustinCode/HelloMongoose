// CONTROLLER = CRUD 
// MAKING QUERIES TO THE DB 
// USING THE MODEL

const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allTheJokes => {
      console.log("allTheJokes is" + allTheJokes);
      res.json({ message: "ok", allTheJokes: allTheJokes });
    })
    .catch(err => res.json({ message: "Something went wrong with find all jokes", error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
    .catch(err => res.json({ message: "Something went wrong with find one joke", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  console.log("req.body is" + req.body);
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrong with creating a joke", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong with updating a joke", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  console.log(req.params);
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong with deleting a joke", error: err }));
};

module.exports.randomJoke = (req, res) => {
  Joke.find()
    .then(allTheJokes => res.json({
      joke: allTheJokes[Math.floor(allTheJokes.length * Math.random())]
    }))
    .catch(err => res.json({ message: "Something went wrong with the random joke", error: err }))
    // needed to seperate the .catch and the .then on different levels to resolve .catch is not a function
}

// DEF AN ERROR HAPPENING WITH MY randomJOKE FUNCTION 