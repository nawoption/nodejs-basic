const DB = require("../models/categoryDbs");
const Helper = require("../utility/helper");

const all = async (req, res, next) => {
  const cats = await DB.find();
  Helper.fMsg(res, "all category", cats);
};

const add = async (req, res, next) => {
  const dbCat = await DB.findOne({ name: req.body.name });
  if (dbCat) {
    next(new Error("Category name already exit"));
    return;
  }
  const result = await new DB(req.body).save();
  Helper.fMsg(res, "added category", result);
};

const get = async (req, res, next) => {
  const cat = await DB.findById(req.params.id);
  Helper.fMsg(res, "single cat", cat);
};

const patch = async (req, res, next) => {
  const dbCat = await DB.findById(req.params.id);
  if (dbCat) {
    await DB.findByIdAndUpdate(req.params.id, req.body);
    const dbCat = await DB.findById(req.params.id);
    Helper.fMsg(res, "update cat", dbCat);
  } else next(new Error("No category with that Id"));
};
const drop = async(req,res,next)=>{
  const dbCat = await DB.findById(req.params.id);
  if(dbCat){
    await DB.findByIdAndDelete(dbCat._id);
    Helper.fMsg(res,"categoroy deleted");
  }else next(new Error("No category with that Id"));
}
module.exports = {
  all,
  add,
  get,
  patch,
  drop
};
