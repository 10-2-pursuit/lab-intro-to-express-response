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
    response.send("Hello world!");
})

app.get("/terminator", (request, response) => {
    response.send("I'll be back");
})

app.get("/homer-simpson", (request, response) => {
    response.send("D'Oh");
})

app.get("/regis", (request, response) => {
    response.send("What's your final answer?");
})

app.get("/emeril", (request, response) => {
    response.send("Bam!");
})

app.get("/zeus", (request, response) => {
    response.send("Release the Kraken");
})

app.get("/rocky", (request, response) => {
    response.send("Aaaadriaaaaan");
})

app.get("/james-bond", (request, response) => {
    response.send("the name is Bond, James Bond");
})

app.get("/gollum", (request, response) => {
    response.send("My precious");
})

app.get("/batman", (request, response) => {
    response.send("To the Batmobile!");
})

app.get("/travis-bickle", (request, response) => {
    response.send("You talkin' to me?");
})

app.get("/magic8", (request, response) => {
    const randomIndex = Math.floor(Math.random() * magic8Responses.length);
    const randomResponse = magic8Responses[randomIndex];
    response.send(randomResponse);
})

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
})