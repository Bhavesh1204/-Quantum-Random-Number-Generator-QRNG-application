const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  bits: [Number],
  total: Number,
  zeros: Number,
  ones: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Result", resultSchema);
