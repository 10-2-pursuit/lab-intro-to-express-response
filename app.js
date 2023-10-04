const express = require("express");

const app = express();
const PORT = 3333;

app.get("/", (request, response) => {
  response.send("Peace, World!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
