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
	"Very doubtful",
];

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/terminator", (request, response) => {
	response.send("I\'ll be back");
});

app.get("/terminator2", (request, response) => {
	response.send("Hasta la vista, baby");
}); 

app.get("/steve-rogers", (request, response) => {
	response.send("I can do this all day!");
});

app.get("/homer-simpson", (request, response) => {
	response.send("D\'Oh");
});

app.get("/bruce-banner", (request, response) => {
	response.send("Don\'t make me angry");
});

app.get("/batman", (request, response) => {
	response.send("To the Batmobile!");
});

app.get("/fraiser", (request, response) => {
	response.send("I\'m listening");
});

app.get("/regis", (request, response) => {
	response.send("Is that your final answer?");
});

app.get("/fox-mulder", (request, response) => {
	response.send("The truth is out there");
});

app.get("/zues", (request, response) => {
	response.send("Release the Kraken");
});

app.get("/tony-montana", (request, response) => {
	response.send("Say hello to my little friend");
});

app.get("/magic8", (request, response) => {
	const randomIndex = Math.floor(Math.random() * magic8Responses.length);
	const randomResponse = magic8Responses[randomIndex];
	response.send(`${randomResponse}`)
});

app.listen(3003, () => {
	console.log("Listening on port 3003");
});