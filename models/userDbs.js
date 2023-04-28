const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  phone: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  created: { type: String, default: Date.now },
});
const user = mongoose.model("user", userSchema);

module.exports = user;
