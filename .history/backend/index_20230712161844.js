const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const User = require("./models");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  try {
    mongoose.connect(
      "mongodb+srv://admin-raghunadh:pradyumna@cluster0.dlrxw.mongodb.net/bseDatabse",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
      console.log("Connected successfully");
    });
  } catch (error) {}
  res.json({ message: "Hello from server!" });
});
app.post("/add_user", async (request, response) => {
  const user = new User(request.body);
  try {
    await user.save();
    response.json({
      success: true,
      user,
    });
  } catch (error) {
    response.json({
      success: false,
      message: error,
    });
  }
});
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
