const express = require('express')

const app = express()
//const PORT = 3003

app.get('/', (request, response) => {
    response.status(200).send('Hello, world!!!')
})

app.get('/terminator', (request, response) => {
    response.send('I\'ll be back')
    response.send('Hasta la vista, baby')
})

//test of test - test for a jest fail
app.get('/Emril', (request, response) => {
    response.status(418).send('Bam')
})

app.get('/Steve_McGarrett', (request, response) => {
    response.status(200).send('Book \'em Danno!')
})

app.get('/coach_taylor', (request, response) => {
    response.status(200).send('Clear eyes, full hearts, can\'t Lose')
})

app.get('/homer_simpson', (request, response) => {
    response.status(200).send('D\'Oh')
})

app.get('/bruce_banner', (request, response) => {
    response.status(200).send('Don\'t make me angry')
})

app.get('/jj_evans', (request, response) => {
    response.status(200).send('Dy-no-myte!')
})

app.get('/batman', (request, response) => {
    response.status(200).send('To the Batmobile!')
})

app.get('/Hannibal_Smith', (request, response) => {
    response.status(200).send('I love it when a plan comes together')
})

app.get('/fraiser', (request, response) => {
    response.status(200).send('I\'m listening')
})

// app.listen(PORT, () => {
//     console.log(`listening on prt ${PORT}`)
// })

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
    const randomIndex = Math.floor(Math.random()*magic8Responses.length)
    response.status(200).send(`<h1>${magic8Responses[randomIndex]}</h1>`)
})

module.exports = app

