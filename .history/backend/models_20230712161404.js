const mongoose = require("mongoose");

const Scrip_codeSchema = new mongoose.Schema({
  scrip_code: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("Scrip", Scrip_codeSchema);

module.exports = User;
