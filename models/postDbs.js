const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: "user" },
  category: { type: Schema.Types.ObjectId, required: true, res: "category" },
  tag: { type: Schema.Types.ObjectId, required: true, res: "tag" },
  like: { type: Number, default: 0 },
  image: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  create: { type: Date, default: Date.now },
});

const Post = mongoose.model("post", postSchema);
module.exports = Post;
