const express = require("express");
const path = require('path');

const app = express();



const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Server React Client
app.get("/", function(req, res) {
  res.sendFile(path.join(CLIENT_BUILD_PATH , "index.html"));
});

app.get("/hello", (req, res) => {
    res.send("Hello World ! ");
  });

module.exports = app;
