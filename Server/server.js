const express = require("express");
const bodyParser = require("body-parser");
const inputs = require("./modules/inputs");

const app = express();
const PORT = 3000;

app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/inputs", (req, res) => {
  res.send(inputs);
});

app.post("/inputs", (req, res) => {
  const newInput = req.body;

  const operator = newInput.operator;
  const num1 = parseFloat(newInput.num1);
  const num2 = parseFloat(newInput.num2);

  if (operator == "+") {
    newInput.total = num1 + num2;
  } else if (operator == "-") {
    newInput.total = num1 - num2;
  } else if (operator == "*") {
    newInput.total = num1 * num2;
  } else if (operator == "/") {
    newInput.total = num1 / num2;
  }

  inputs.push(newInput);

  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} `);
});
