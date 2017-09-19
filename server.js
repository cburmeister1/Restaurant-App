// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// PEOPLE DATA
// =============================================================

var waitlist = [];
var tables = [];

function Person(reserve_name,reserve_phone,reserve_email,reserve_uniqueID){
  this.reserve_name = reserve_name;
  this.reserve_phone = reserve_reserve_phone;
  this.reserve_email = reserve_email;
  this.reserve_uniqueID = reserve_uniqueID;
}

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

/*
// Get all characters
app.get("/all", function(req, res) {
  res.json(characters);
});
*/

//return confirmed
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});
//return waiting
app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});



// Create New "Reservation" - takes in JSON input
app.post("/api/new", function(req, res) {
  var personData = req.body;
  var newPerson = new Person(personData.reserve_name,personData.reserve_email,personData.reserve_phone,personData.reserve_uniqueID);

  if(confirmed.length <= 5){
    confirmed.push(newPerson);
  }else{
    waiting.push(newPerson);
  }

  console.log(newPerson);

  res.json(newPerson);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
