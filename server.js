// This file is the initial starting point for the Node/Express server.

var express = require("express"); // Required express module referencing that was installed earlier
var app = express();   // Sets up the Express App
var PORT = process.env.PORT || 8080;
var db = require("./models");   // Requiring our models for syncing
app.use(express.urlencoded({ extended: true })); // sets the Express to handle data parsing
app.use(express.json());
app.use(express.static("public"));   // required for static directory
// Routes
require("./routes/api-routes.js")(app);
// Syncing our sequelize models and then starting Express app
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});