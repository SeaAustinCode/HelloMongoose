const mongoose = require("mongoose");

module.exports = (DB_NAME) => {
	mongoose.connect('mongodb://localhost/'+DB_NAME, {
		useNewUrlParser: true,
		useUnifiedTopology: true
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));

// mongoose.connect("mongodb://localhost/jokes_db", { // ADJUST DB NAME HERE  cd c:/"program files"/Mongodb/server/5.0/bin/ ./mongo

// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// })
// 	.then(() => console.log("Established a connection to the database"))
// 	.catch(err => console.log("Something went wrong when connecting to the database", err));
}
