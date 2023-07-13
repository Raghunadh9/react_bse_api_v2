const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const User = require("./models");
const axios = require("axios");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});
//add single code to database
app.post("/add_code", async (request, response) => {
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
//get all codes from database
app.get("/codes", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
    //    const allCodes = users.map((user) => user.scrip_code);
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.get("/converttobseapi", async (req, res) => {
  try {
    const users = await User.find();
    const allCodes = users.map((user) => user.scrip_code);
    const returnedData = await fetch(
      `https://api.bseindia.com/BseIndiaAPI/api/EQPeerGp/w?scripcode=${allCodes}&scripcomare=`
    ).then((res) => res.json());
    let fullData = [];
    fullData.push(returnedData.Table[0]);
    res.status(200).json(fullData);
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});
//delete code from database
app.delete("/code/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser) {
      res.json({
        success: true,
        message: "User deleted successfully",
      });
    } else {
      res.json({
        success: false,
        message: "User not found",
      });
    }
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
