const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const port = 3000;

app.use(express.json());

// test23
app.get("/", (req, res) => {
  console.log("request got");
  const secret = process.env.SECRET;
  res.send("this is the changed code : " + secret);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
