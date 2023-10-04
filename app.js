const express = require("express");

const app = express();
const PORT = 3333;

app.get("/", (request, response) => {
  response.send("Peace, World!");
});

app.get("/terminator", (request, response) => {
  response.send("I'll be back");
});

app.get("/terminator2", (request, response) => {
  response.send("Hasta la vista, baby");
});

app.get("/Emeril", (req, res) => {
  res.send("Bam!");
});

app.get("/Steve-McGarrett", (req, res) => {
  res.send("Book 'em Danno!");
});

app.get("/Rocky", (req, res) => {
  res.send("Yo, Adrian");
});

app.get("/Jim-Lovell", (req, res) => {
  res.send("Houston, we have a problem");
});

app.get("/Rod-Tidwell", (req, res) => {
  res.send("Show me the money!");
});

app.get("/Tony-Montana", (req, res) => {
  res.send("Say hello to my little friend");
});

app.get("/Zeus", (req, res) => {
  res.send("Release the Kraken");
});

app.get("/Travis-Bickle", (req, res) => {
  res.send("You talkin' to me?");
});

app.get("/Fox-Mulder", (req, res) => {
  res.send("The truth is out there");
});

app.get("/magic8", (req, res) => {
  res.send(`<h1>${magic8Answer}</h1>`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
