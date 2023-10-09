const express = require("express");

const app = express();
const PORT = 3333


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

  app.get("/", (request, response) => {
    response.send("I love Express!");
  });

  app.get("/universe", (request, response) => {
    response.send("Hello Universe!");
  });

  app.get("/magic8", (request, response) => {
    const randomIndex = Math.floor(Math.random()) * magic8Responses()
    const randomResponse = magic8Responses[randomIndex]
    response.send("randomResponse ${randomResponse}");
  }); 

  app.get("/emeril", (req, res) => {
    res.send("Bam!");
  });
  app.get("/stevemcgarrett", (req, res) => {
    res.send("Book 'em Danno!");
  });
  app.get("/coachtaylor", (req, res) => {
    res.send("Clear eyes, full hearts, can't Lose");
  });
  app.get("/homersimpson", (req, res) => {
    res.send("D'Oh");
  });
  app.get("/brucebanner", (req, res) => {
    res.send("Don't make me angry");
  });
  app.get("/jjevans", (req, res) => {
    res.send("Dy-no-myte!");
  });
  app.get("/batman", (req, res) => {
    res.send("To the Batmobile!");
  });
  app.get("/hannibalsmith", (req, res) => {
    res.send("I love it when a plan comes together");
  });
  app.get("/frasier", (req, res) => {
    res.send("I'm listening");
  });
  app.get("/regis", (req, res) => {
    res.send("Is that your final answer?");
  });
  app.get("/borg", (req, res) => {
    res.send("Resistance is futile");
  });
  app.get("/foxmulder", (req, res) => {
    res.send("The truth is out there ");
  });
  
  app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
  });

