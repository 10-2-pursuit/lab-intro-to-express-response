const express = require("express");
const app = express();

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
  ];

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
    res.send('hi')
});

app.get('/emeril', (reg, res) => {
    res.send('Bam!');
});

app.get('/steve-mcgarrett', (reg, res) => {
    res.send(`Book \'em Danno!`);
});

app.get('/coach-Taylor', (reg, res) => {
    res.send(`Clear eyes, full hearts, can\'t Lose`);
});

app.get('/homer-simpson', (reg, res) => {
    res.send(`D'oh!`);
});

app.get('/bruce-banner', (reg, res) => {
    res.send(`Don\'t make me angry`);
});

app.get('/batman', (reg, res) => {
    res.send('To the Batmobile!');
});

app.get('/fraiser', (reg, res) => {
    res.send(`I\'m listening`);
});

app.get('/borg', (reg, res) => {
    res.send('Resistance is futile');
});

app.get('/magic8', (reg, res) => {
    res.send(res.send(`<h1>${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}</h1>`));
});

/** listning port */
app.listen(3003);
