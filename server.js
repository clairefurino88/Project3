const express = require("express");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const logger = require("morgan")("tiny");

const db = require("./models");

const { api, auth } = require("./controllers");

const PORT = process.env.PORT || 3001;
const app = express();

//#region MIDDLEWARE

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//passport
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//morgan
app.use(logger);

//controllers
app.use("/api", api); // API Routes
app.use("/auth", auth); // Client\User Routes

//#endregion MIDDLEWARE

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connecting to MySQL and launching Express web server
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`🌎 ==> Server listening on port: ${PORT}!`);
  });
});