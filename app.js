const express = require('express')

const app = express()
const PORT = 3003

app.get('/', (request, response) => {
    response.send('Hello, world!!!')
})

app.get('/terminator', (request, response) => {
    response.send('I\'ll be back')
    response.send('Hasta la vista, baby')
})

app.get('/Emril', (request, response) => {
    response.send('Bam')
})

app.get('/Steve_McGarrett', (request, response) => {
    response.send('Book \'em Danno!')
})

app.get('/coach_taylor', (request, response) => {
    response.send('Clear eyes, full hearts, can\'t Lose')
})

app.get('/homer_simpson', (request, response) => {
    response.send('D\'Oh')
})

app.get('/bruce_banner', (request, response) => {
    response.send('Don\'t make me angry')
})

app.get('/jj_evans', (request, response) => {
    response.send('Dy-no-myte!')
})

app.get('/batman', (request, response) => {
    response.send('To the Batmobile!')
})

app.get('/Hannibal_Smith', (request, response) => {
    response.send('I love it when a plan comes together')
})

app.get('/fraiser', (request, response) => {
    response.send('I\'m listening')
})


app.listen(PORT, () => {
    console.log(`listening on prt ${PORT}`)
})