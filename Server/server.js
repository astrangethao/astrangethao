const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} `);
});

app.post("/addition", (req, res) => {
  res.send("we are posting");
});
