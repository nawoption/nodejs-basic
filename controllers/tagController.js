const helper = require("../utility/helper");
const DB = require("../models/tagDbs");

const all = async (req, res, next) => {
  const tags = await DB.find();
  helper.fMsg(res, "all tags", tags);
};

const add = async (req, res, next) => {
  const tag = await DB.findOne({ name: req.body.name });
  if (tag) {
    next(new Error("tag name already exit"));
  } else {
    const result = await new DB(req.body).save();
    helper.fMsg(res, "saved tag", result);
  }
};

const get = async (req, res, next) => {
  const dbTag = await DB.findById(req.params.id);
  if (dbTag) {
    helper.fMsg(res, "single tag", dbTag);
  } else next(new Error("no tag with that id"));
};

const patch = async (req, res, next) => {
  const dbTag = await DB.findById(req.params.id);
  if (dbTag) {
    await DB.findByIdAndUpdate(dbTag._id,req.body);
    const result = await DB.findById(dbTag._id);
    helper.fMsg(res, "updated tag", result);
  } else next(new Error("no tag with that id"));
};

const drop = async (req, res, next) => {
  const dbTag = await DB.findById(req.params.id);
  if (dbTag) {
    await DB.findByIdAndDelete(dbTag._id);
    helper.fMsg(res, "deleted tag");
  } else next(new Error("no tag with that id"));
};

module.exports = {
  all,
  add,
  get,
  patch,
  drop
};
