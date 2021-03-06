var express = require("express");
var path = require("path");
var opn = require("opn");

const http = require('http');

const app = express();
//const port = 8080;

app.use(express.static(path.resolve(__dirname + "/public")));

//homepage
app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/public/views/index.html"));
});

app.get("/history", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/public/views/history.html"));
});

app.get("/landmarks", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/public/views/landmarks.html"));
});

app.get("/tourism", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/public/views/tourism.html"));
});

app.get("/transportation", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/public/views/transportation.html"));
});

app.get("/carousel", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/public/views/carousel.html"));
});

app.get("/about", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/public/views/about.html"));
});

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/public/views/404.html"));
});

/*
app.listen(port, function() {
  console.log("listening on port " + ".");
  opn("https://frontend-rab.herokuapp.com/:" + port);
});
*/
// Server Setup
const port = process.env.PORT || 8081;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
