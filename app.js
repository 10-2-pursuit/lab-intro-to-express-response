const express = require('express');

const app = express(); 

app.get('/', (req, res) => {
    res.send('Hello, Express!');
}); 

app.get('/terminator', (req, res) => { 
    res.send("i'll be back");
});

app.get('/emiril', (req, res) => { 
    res.send("iBam!");
});

app.get('/steve-mcgarrett', (req, res) => { 
    res.send("Book 'em Danno!");
});

app.get('/Batman', (req, res) => { 
    res.send("To the Batmobile");
});

app.get('/Fraiser', (req, res) => { 
    res.send("I'm listening");
});

app.get('terminator', (req, res) => {
    const catchphrase = ["I'll be back", 'Hasta la vista, baby'];
    res.send(catchphrase.join('\n'));
  });


  const magic8BallResponses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
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

  app.get('/magic8ball', (req, res) => {
    const randomResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)]; 
    res.send(randomResponse);
  });

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});