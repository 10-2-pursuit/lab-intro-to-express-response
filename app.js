const express = require("express");
const app = express();

const PORT = 3003;

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
  "Very doubtful"

]

app.get("/", (request, response) => {
  response.status(418).send("Hey, this is your servers test.");
});

app.get("/tony-montana", (req, res) => {
  res.send("Say hello to my little friend.");
});

app.get("/neo", (req, res) => {
  res.send("Whoa I know Kung Fu.");
});

app.get("/morpheus", (req, res) => {
  res.send("Dont Think You Are. Know You Are.");
});

app.get("/gollum", (req, res) => {
  res.send("Ahh!, Whats he doing?, Stupid fat hobbit. He ruins it");
});

app.get("/tony-starks", (req, res) => {
  res.send("Doth mother know you weareth her drapes?");
});

app.get("/viggo-tarasov", (req, res) => {
  res.send("I once saw him kill three men in a bar with a pencil. With a f...... pencil!");
});

app.get("/will-munny", (req, res) => {
  res.send("He should have armed himself... if he\'s going to decorate his saloon with my friend.");
});

app.get("/will-munny-2", (req,  res) => {
  res.send("I\'ve killed women and children. I\' killed everything tht walks or crawls at one time or another. And I\'m here to kill you, little Bill, for what you done to Ned.");
});

app.get("/teddy-brukshut", (req, res) => {
  res.send("Biggs, you gone too far now man. Wah yu a deal wid? From yu come from Jamaica, yu come in like a pestilence inna mi life Biggs. Ah money yu want?");
});


app.get("/magic8", (req, res) => {
   const randomIndex = Math.floor(Math.random() * magic8Responses.length);
   const randomResponse = magic8Responses[randomIndex];
  res.send(randomResponse)
})



module.exports = app

