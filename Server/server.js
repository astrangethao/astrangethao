const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const inputs = require("./modules/inputs");

app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} `);
});

app.get("/inputs", (req, res) => {
  res.send(inputs);
});

app.post("/inputs", (req, res) => {
  let newInput = req.body;
  console.log(newInput);
  inputs.push(newInput);

  res.sendStatus(201);
});
