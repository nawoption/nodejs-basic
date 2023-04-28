const mongoose = require("mongoose");
const { Schema } = mongoose;

const tagSchema = Schema({
  name: { type: String, requied: true, unique: true },
  image: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

const Tag = mongoose.model("tag", tagSchema);
module.exports = Tag;
