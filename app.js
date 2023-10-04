const express = require('express')

const app = express()
const PORT = 3003

app.get('/', (request, response) => {
    response.send('Hello, world!')
})

app.listen(PORT, () => {
    console.log(`listening on prt ${PORT}`)
})