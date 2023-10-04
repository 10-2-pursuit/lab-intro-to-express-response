// Dependencies
const express = require('express');

// Configuration
const app = express();
const PORT = 3333;

// Routes
app.get('/', (req, res) => {
	res.send('Intro to Express Response Lab 🖖');
});

app.get('/terminator', (req, res) => {
	res.send(`I'll be back`);
});

app.get('/borg', (req, res) => {
	res.send(`Resistance is futile`);
});

// Listen
app.listen(PORT, () => {
	console.log(`Listening for requests on port ${PORT}`);
});
