const { response, request } = require("express");
const app = express();

app.get("/terminator ", (request, response) => {
    response.send(`<h1>I'll be back</h1>`)
    response.send(`<h1>Hasta la vista, baby</h1>`)
});

app.get("/homer-simpson", (request, response) => {
    response.send(`<h1>D'Oh</h1>`)
});

app.get("/tony-montana", (request, response) => {
    response.send(`<h1>Say hello to my little friend</h1>`)
});

app.get("/dorothy", (request, response) => {
    response.send(`<h1>Toto, I've got a feeling we're not in Kansas anymore</h1>`)
});

app.get("/rocky", (request, response) => {
    response.send(`<h1>Yo, Adrian</h1>`)
});

app.get("/jack-dawson", (request, response) => {
    response.send(`<h1>I'm king of the world!</h1>`)
});

app.get("/james-bond", (request, response) => {
    response.send(`<h1>the names Bond, James Bond</h1>`)
});

app.get("/bruce-banner", (request, response) => {
    response.send(`<h1>Don't make me angry</h1>`)
});

app.get("/jj-evans", (request, response) => {
    response.send(`<h1>Dy-no-myte!</h1>`)
});



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

  app.get("/magic8", (request, response) => {
    const magicIndex = Math.floor(Math.random() * magic8Responses.length);
    const randomResponse = magic8Responses[magicIndex]
    response.send(`<h1>${randomResponse}</h1>`)
  })