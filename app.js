const express = require("express");
const app = express();
const fruitRouter = require("./routes/fruits")
const logger = require("./logger")

app.use(logger)
app.use(express.json()) //This will convert json into javaScript

app.get("/", (req, res) => {
  res.send("Welcome to the FruityAPI");
});

app.use("/fruits", fruitRouter) //because it's 'use', it finds that it ccontains

module.exports = app
