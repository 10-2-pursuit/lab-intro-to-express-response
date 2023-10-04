const express = require('express');
const app = express();
const port = 3003;


/*
function formatNamesAndCatchphrases(list) {
  const formattedList = list.split('\n').map((line) => {
    const [fullName, catchphrase] = line.split(' - ');

    // Split the full name into words and filter out empty strings (e.g., trailing spaces)
    const words = fullName.split(' ').filter(Boolean);

    // Join the words with hyphens
    const name = words.join('-').toLowerCase();

    return { name, catchphrase };
  });

  return formattedList;
}

const inputList = `
  Terminator - I'll be back
  Tim Gunn - Make it work
  Emeril - Bam!
  Steve McGarrett - Book 'em Danno!
  Coach Taylor - Clear eyes, full hearts, can't Lose
  Homer Simpson - D'Oh
  Bruce Banner - Don't make me angry
  JJ Evans - Dy-no-myte!
  Batman - To the Batmobile!
  Hannibal Smith - I love it when a plan comes together
  Fraiser - I'm listening
  Regis - Is that your final answer?
  Borg - Resistance is futile
  Fox Mulder - The truth is out there
  Harry Callahan - Go ahead, make my day
  Travis Bickle - You talkin' to me?
  Tony Montana - Say hello to my little friend
  Zeus - Release the Kraken
  James Bond - the name is Bond, James Bond
  Dorothy - Toto, I've got a feeling we're not in Kansas anymore
  Rod Tidwell - Show me the money!
  Frankenstein - It's alive! It's alive
  Jim Lovell - Houston, we have a problem
  Rocky - Yo, Adrian
  Gollum - My precious
  Jack Dawson - I'm king of the world!
  Terminator - Hasta la vista, baby`;

const formattedData = formatNamesAndCatchphrases(inputList);

// Define a route that handles requests with a person's name
app.get('/:name', (req, res) => {
  const requestedName = req.params.name.toLowerCase();

  // Find the corresponding catchphrase(s) for the requested name
  const matchingEntries = formattedData.filter(entry => entry.name === requestedName);

  if (matchingEntries.length === 0) {
    res.status(404).send('Name not found');
  } else {
    const catchphrases = matchingEntries.map(entry => entry.catchphrase);
    res.send(catchphrases.join('\n')); // Send catchphrases separated by newline
  }
});

*/



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

  app.get('/magic8', (req, res) => {
    const randomIndex = Math.floor(Math.random() * magic8Responses.length);
    const randomResponse = magic8Responses[randomIndex];
    res.send(`<h1>${randomResponse}</h1>`);
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
  module.exports = app;