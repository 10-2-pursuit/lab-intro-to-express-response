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

const magic8Responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - Definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes, and signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic8", (req, res) => {
  const randomIndex = Math.trunc(Math.random() * magic8Responses.length);
  const randomResponse = magic8Responses[randomIndex];

  res.send(`<h1>${randomResponse}</h1>`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
