const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const history = require("./modules/history");

app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} `);
});

app.get("/history", (req, res) => {
  res.send(history);
});

app.post("/history", (req, res) => {
  let newInput = req.body;
  console.log(newInput);
  history.push(newInput);

  res.sendStatus(201);
});
