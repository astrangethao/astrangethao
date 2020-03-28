const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const inputs = require("./modules/inputs");

let operator;
let num1;
let num2;
let total = 0;

console.log(operator);

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
  for (let i = 0; i < inputs.length; i++) {
    operator = inputs[i].operator;
    num1 = parseFloat(inputs[i].num1);
    num2 = parseFloat(inputs[i].num2);
    console.log("operator:", operator);
    console.log("num1:", num1);
    console.log("num2:", num2);
    if (operator == "+") {
      total = num1 + num2;
      console.log(total);
    }
  }

  res.send(inputs);
});
