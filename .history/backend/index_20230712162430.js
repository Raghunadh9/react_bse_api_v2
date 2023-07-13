const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const User = require("./models");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
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
      message: error.message,
    });
  }
});
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      success: true,
      users,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

mongoose
  .connect(
    "mongodb+srv://admin-raghunadh:pradyumna@cluster0.dlrxw.mongodb.net/bseDatabse",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    }
  )
  .then(() => {
    app.listen(8000, () => {
      console.log(`Server is running on port 8000.`);
    });
    console.log("Connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error: ", error);
  });
