// DEPENDENCIES
const express = require('express')

//CONFIGURATION 
const app = express()
const PORT = 3033

//ROUTES
app.get('/', (request, responde) => {
    responde.send('Hello, world!')
})

//LISTEN
app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})

app.get('/terminator', (req, res) => {
    res.send('I\ll be back')
    res.send('Hasta la vista, baby')
  })

app.get('/jamesBond', (request, responde) => {
    responde.send('agent 007')
})

app.get('/luffy', (request, responde) => {
    responde.send('one piece')
})

app.get('/dragonBall', (request, responde) => {
    responde.send('Goku')
})

app.get('/netflix', (request, responde) => {
    responde.send('nice movie')
})

app.get('/pursuit', (request, responde) => {
    responde.send('full stack development')
})

app.get('/Regis ', (request, responde) => {
    responde.send(' Is that your final answer?')
})

app.get('/HarryCallahan', (request, responde) => {
    responde.send(' Go ahead, make my day')
})

app.get('/Zeus ', (request, responde) => {
    responde.send(' Release the Kraken')
})

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
  app.get('/magic8', (request, response) => {
   
    const randomIndex = Math.floor(Math.random() * magic8Responses.length);
    
    const randomResponse = magic8Responses[randomIndex];
  
    response.send(`<h1>${randomResponse}</h1>`);
  });  