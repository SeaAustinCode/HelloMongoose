const express = require("express");
const app = express();
const PORT = 8000; 
const DB_NAME = "jokes_db"
// const mongoose = require('mongoose');

// ------ MIDDLEWARE --------
app.use(express.json(), express.urlencoded({ extended: true }));

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

const exportedDBFunction = require("./server/config/mongoose.config")
exportedDBFunction(DB_NAME);


// This is where we import the users routes function from our user.routes.js file
// require("./server/routes/joke.routes")(app)
const routesFunction = require("./server/routes/joke.routes");
routesFunction(app);

app.listen(PORT, () => console.log(`The server is all fired up on port: ${PORT}`));
