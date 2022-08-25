const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// const port = 3000;

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.info(`App rodando em http://localhost:${port}`);
});
