// Dependencies
const express = require('express');

// Configuration
const app = express();
const PORT = 3333;

// Routes
app.get('/', (req, res) => {
	res.send('Intro to Express Response Lab 🖖');
});

const magic8Responses = [
	'It is certain',
	'It is decidedly so',
	'Without a doubt',
	'Yes - Definitely',
	'You may rely on it',
	'As I see it, yes',
	'Most likely',
	'Outlook good',
	'Yes, and signs point to yes',
	'Reply hazy, try again',
	'Ask again later',
	'Better not tell you now',
	'Cannot predict now',
	'Concentrate and ask again',
	"Don't count on it",
	'My reply is no',
	'My sources say no',
	'Outlook not so good',
	'Very doubtful',
];

app.get('/magic8', (req, res) => {
	const randomIndex = Math.trunc(Math.random() * magic8Responses.length);
	const randomResponse = magic8Responses[randomIndex];

	res.send(`<h1>${randomResponse}</h1>`);
});

// Listen
app.listen(PORT, () => {
	console.log(`Listening for requests on port ${PORT}`);
});
