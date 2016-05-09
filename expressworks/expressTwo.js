var http = require('http');
var express = require('express');
var app = express();

app.all("*",function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  next();
});

app.get("/", function(req,res){
  res.end("Welcome to the homepage!");
});

app.get("/about", function(req,res){
  res.end("Welcome to the about page!");
});

app.get("/about:who", function(req,res){
  res.end("Hey " + req.params.who + "! Welcome to the about page!");
});

app.get("*", function(req,res){
  res.end("404!");
});


http.createServer(app).listen(1337);
