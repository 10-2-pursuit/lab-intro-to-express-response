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

// Listen
app.listen(PORT, () => {
	console.log(`Listening for requests on port ${PORT}`);
});
