const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());

// test23
app.get("/", (req, res) => {
  console.log("request got");
  const secret = process.env.SECRET;
  res.send("From dev -the key : " + secret  + " RUNNING ON PORT : " + port);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
