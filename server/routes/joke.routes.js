// import the controller to use the instantiated model
const JokeController = require("../controllers/joke.controller")
console.log(JokeController)

module.exports = (app) => {
  app.get("/api/jokes", JokeController.findAllJokes);
  app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
  app.get("/api/random", JokeController.randomJoke); 
  app.post("/api/jokes", JokeController.createNewJoke);
  app.put("/api/jokes/:id", JokeController.updateExistingJoke);
  app.delete("/api/jokes/:id", JokeController.deleteAnExistingJoke);
}