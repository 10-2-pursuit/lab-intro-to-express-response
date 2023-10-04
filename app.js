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
	response.send("Hasta la vista, baby")
});

app.get("/terminator2", (request, response) => {
	response.send("Hasta la vista, baby");
});

app.get("/magic8", (request, response) => {
	const randomIndex = Math.floor(Math.random()) * magic8Responses.length;
	const randomResponse = magic8Responses[randomIndex];
	response.send(`${randomResponse}`)
});

app.listen(3003, () => {
	console.log("Listening on port 3003");
});