const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  try {
    mongoose.connect("mongodb://localhost:27017/usersdb", {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  } catch (error) {}
  res.json({ message: "Hello from server!" });
});
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
