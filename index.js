const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Kidz car server is ready to serve..");
});

app.listen(port, () => {
  console.log(`Kidz car server is running on port ${port}`);
});
