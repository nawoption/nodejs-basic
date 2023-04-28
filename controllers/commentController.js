const DB = require("../models/commentDbs");
const helper = require("../utility/helper");

const all = async (req, res, next) => {
  const comments = await DB.find({ postId: req.params.id });
  if (comments) helper.fMsg(res, "comments by post", comments);
  else next(new Error("no comment with that post"));
};

const add = async (req, res, next) => {
  const cmt = await new DB(req.body).save();
  helper.fMsg(res, "comment added", cmt);
};

const drop = async (req, res, next) => {
  let cmt = await DB.findById(req.params.id);
  if (cmt) {
    await DB.findByIdAndDelete(cmt._id);
    helper.fMsg(res, "comment deleted");
  } else next(new Error("no comment with that id"));
};
module.exports={
    all,
    add,
    drop
}