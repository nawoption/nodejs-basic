const DB = require("../models/userDbs");
const helper = require("../utility/helper");

const login = async (req, res, next) => {
  let ph_user = await DB.findOne({ phone: req.body.phone }).select('-__v');
  if (ph_user) {
    var con = helper.comparePass(req.body.password, ph_user.password);
    if (con) {
      let user = ph_user.toJSON();
      delete user.password
      user.token = helper.generateToken(user);
      helper.fMsg(res, "login success", user);
    } else next(new Error("Crediential error"));
  } else next(new Error("Crediential error"));
};

const register = async (req, res, next) => {
  let name_user = await DB.findOne({ name: req.body.name });
  if (name_user) {
    next(new Error("user name already exit"));
    return;
  }
  let emil_user = await DB.findOne({ email: req.body.email });
  if (emil_user) {
    next(new Error("email alredy exit"));
    return;
  }
  let phone_user = await DB.findOne({ phone: req.body.phone });
  if (phone_user) {
    next(new Error("phone number already exit"));
  }
  let encodePass = helper.encode(req.body.password);
  req.body.password = encodePass;
  let result = await new DB(req.body).save();
  helper.fMsg(res, "register success", result);
};

module.exports = {
  login,
  register,
};
