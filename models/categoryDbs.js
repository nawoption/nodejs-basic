const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

const category = mongoose.model("category", categorySchema);
module.exports = category;
