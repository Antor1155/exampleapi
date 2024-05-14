const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const port = 3000;

// this must be running continiously
app.get("/", (req, res) => {
  console.log("request got");
  const secret = process.env.SECRET;
  res.send("Hello World! and the evn is : " + secret);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
