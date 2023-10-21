const express = require("express");

const app = express();
const PORT = 3003;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tim-gunn", (req, res) => {
  res.send("Make it work");
});

app.get("/emeril", (req, res) => {
  res.send("Bam!");
});

app.get("/coach-taylor", (req, res) => {
  res.send("Clear eyes, full hearts, can't Lose");
});

app.get("/homer-simpson", (req, res) => {
  res.send("D'oh!");
});

app.get("/bruce-banner", (req, res) => {
  res.send("Don't make me angry.");
});

app.get("/jj-evans", (req, res) => {
  res.send("Dy-no-myte!");
});

app.get("/batman", (req, res) => {
  res.send("To the Batmobile!");
});

app.get("/hannibal-smith", (req, res) => {
  res.send("I love it when a plan comes together.");
});

app.get("/frasier", (req, res) => {
  res.send("I'm listening.");
});

app.get("/regis", (req, res) => {
  res.send("Is that your final answer?");
});

app.get("/borg", (req, res) => {
  res.send("Resistance is futile.");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
