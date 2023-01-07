const express = require("express");
const morgan = require("morgan");
const nodemon = require('nodemon');
const app = express();

app.use(morgan("dev"));


app.use(express.static(__dirname + "/public"));


// Default server message
app.use((req, res, next) => {
  // console.log(req.headers);
  res.statusCode = 400;
  res.setHeader("Content-Type", "text/html");
  res.end(`<html><body>
    <h1>This is an Express Server</h1>
    </body></html>`);
});

module.exports = app;
