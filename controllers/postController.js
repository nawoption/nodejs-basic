const DB = require("../models/postDbs");
const cmtDB = require("../models/commentDbs");
const Helper = require("../utility/helper");
const all = async (req, res, next) => {
  const posts = await DB.find();
  Helper.fMsg(res, "All posts", posts);
};
const get = async (req, res, next) => {
  let post = await DB.findById(req.params.id).populate(
    "user category",
    "-password -__v"
  );
  if (post) {
    post = post.toObject()
    const comments = await cmtDB.find({postId:post._id});
    post.comments = comments;
    Helper.fMsg(res, "single post", post);
  } else {
    next(new Error("No post with that id"));
  }
};

const getCategoryPost = async (req, res, next) => {
  const posts = await DB.find({ category: req.params.catid });
  Helper.fMsg(res, "category posts", posts);
};

const getAuthorPost = async (req, res, next) => {
  const posts = await DB.find({ user: req.params.userid });
  Helper.fMsg(res, "author posts", posts);
};

const getTagPosts = async (req, res, next) => {
  const posts = await DB.find({ tag: req.params.tagid });
  Helper.fMsg(res, "tag posts", posts);
};

const post = async (req, res, next) => {
  let userId = req.body.user._id;
  delete req.body.user;
  req.body.user = userId;
  const result = await new DB(req.body).save();
  Helper.fMsg(res, "post added", result);
};
const patch = async (req, res, next) => {
  let post = await DB.findById(req.params.id);
  if (post) {
    await DB.findByIdAndUpdate(post._id, req.body);
    let result = await DB.findById(post._id);
    Helper.fMsg(res, "post updated", result);
  } else {
    next(new Error("no post with that Id"));
  }
};

const drop = async (req, res, next) => {
  const post = await DB.findById(req.params.id);
  if (post) {
    await DB.findByIdAndDelete(post._id);
    Helper.fMsg(res, "post successfully deleted");
  } else next(new Error("no post with that id"));
};

const paginate = async (req, res, next) => {
  let page = req.params.page == 0 ? 0 : req.params.page - 1;
  let limit = Number(process.env.POST_LIMIT);
  let skip_count = page * limit;
  let posts = await DB.find().skip(skip_count).limit(limit);
  Helper.fMsg(res, "paginated posts", posts);
};
module.exports = {
  all,
  get,
  post,
  patch,
  drop,
  getCategoryPost,
  getAuthorPost,
  paginate,
  getTagPosts,
};
