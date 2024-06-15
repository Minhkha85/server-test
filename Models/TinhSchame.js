const mongoose = require("mongoose");

const TinhSchame = new mongoose.Schema({
  tinh: String,
  huyen: Array,
});

module.exports = mongoose.model("Tinh", TinhSchame);
