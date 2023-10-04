// Dependencies
const express = require('express');

// Configuration
const app = express();
const PORT = 3333;

// Routes
app.get('/', (req, res) => {
	res.send('Intro to Express Response Lab 🖖');
});

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

// Listen
app.listen(PORT, () => {
	console.log(`Listening for requests on port ${PORT}`);
});
