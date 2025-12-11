const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: String,
  price: { type: Number, required: true },
  img: String
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
