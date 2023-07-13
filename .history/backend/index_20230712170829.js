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
app.get("/allConvertedData", async (req, res) => {
  try {
    const users = await User.find();
    const allCodes = users.map((user) => user.scrip_code);

    const promises = allCodes.map((code) =>
      fetch(
        `https://api.bseindia.com/BseIndiaAPI/api/EQPeerGp/w?scripcode=${code}&scripcomare=`
      )
        .then((res) => res.json())
        .then((data) => data.Table[0])
    );

    const fullData = await Promise.all(promises);

    res.status(200).json(fullData);
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});
//delete code from database
app.delete("/removeCode/:code", async (req, res) => {
  const { code } = req.params;
  try {
    const deletedCode = await User.deleteOne({ scrip_code: code });
    if (deletedCode.deletedCount === 0) {
      res.json({
        success: false,
        message: "Code not found",
      });
    } else {
      res.json({
        success: true,
        message: "Code removed successfully",
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
