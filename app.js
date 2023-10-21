const express = require("express");

const app = express();
const PORT = 3003;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tim-gunn", (req, res) => {
  res.send("Make it work");
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back.");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
