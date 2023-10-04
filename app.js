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
    "Very doubtful"
  
  ]

app.get("/magic8", (req, res) => {
    const randomIndex =  Math.floor(Math.random() * magic8Responses.length)
    const randomResponse = magic8Responses[randomIndex]
  res.send(`<h1>${randomResponse}</h1>`)
})

app.get("/", (request, response) => {
  response.send("Hello, Express");
});
app.get("/tim-gunn", (req, res) => {
    res.send('Make it work')
  })
  
  app.get("/Emeril", (req, res) => {
    res.send('Bam!')
  })

  app.get("/terminator", (req, res) => {
    res.send("I'll be back!")
  })


app.listen(3003);