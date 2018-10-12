require("newrelic");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
var compression = require("compression");

var server = express();
server.use(compression());
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "./"), { maxAge: "30 days" }));
server.use(cors());

// Albums & Player
server.all("/api/v1/artists/:artistID/albums/", (req, res, next) => {
  // console.log('ec2-54-164-130-42.compute-1.amazonaws.com' + req.url);
  res.redirect("http://54.164.130.42" + req.url);
  next();
});

server.get("/api/v1/artists/:id/related-artists", (req, res) => {
  const { id } = req.params;
  res.redirect(
    `http://54.148.230.254:3002/api/v1/artists/${id}/related-artists`
  );
});

// Popular Songs
server.get("/api/v1/artists/:id/popular-songs", (req, res) => {
  res.redirect("http://13.56.189.115" + req.url);
});

// Header
server.get("/api/v1/artists/:artistID", (req, res) => {
  console.log(req.url);
  res.redirect("http://18.221.180.131" + req.url);
});

server.listen(3000, console.log("Listening on:", 3000));
