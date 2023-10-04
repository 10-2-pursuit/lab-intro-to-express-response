// Dependencies
const express = require('express');

// Configuration
const app = express();
const PORT = 3333;

// Routes
app.get('/', (req, res) => {
	res.send('Intro to Express Response Lab 🖖');
});

// Catchphrases Express
// 1.
app.get('/terminator', (req, res) => {
	res.send(`I'll be back`);
});

// 2.
app.get('/borg', (req, res) => {
	res.send(`Resistance is futile`);
});

// 3.
app.get('/bruce-banner', (req, res) => {
	res.send(`Don't make me angry`);
});

// 4.
app.get('/emeril', (req, res) => {
	res.send(`Bam!`);
});

// 5.
app.get('/jj-evans', (req, res) => {
	res.send(`Dy-no-myte!`);
});

// 6.
app.get('/homer-simpson', (req, res) => {
	res.send(`D'Oh`);
});

// 7.
app.get('/gollum', (req, res) => {
	res.send(`My precious`);
});

// 8.
app.get('/rocky', (req, res) => {
	res.send(`Yo, Adrian`);
});

// 9.
app.get('/zeus', (req, res) => {
	res.send(`Release the Kraken`);
});

// 10.
app.get('/dorothy', (req, res) => {
	res.send(`Toto, I've got a feeling we're not in Kansas anymore`);
});

// 11.
app.get('/terminator2', (req, res) => {
	res.send(`Hasta la vista, baby`);
});

// Magic 8 Ball
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
