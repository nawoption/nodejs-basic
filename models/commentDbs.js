const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  content: { type: String, required: true },
  postId: { type: Schema.Types.ObjectId, ref: "post", required: true },
  created: { type: Date, default: Date.now },
});

const comment = mongoose.model("comment", commentSchema);
module.exports = comment;
