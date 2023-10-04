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

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});