var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken")
const fMsg = (res, msg = "Success", result = []) => {
  res.status(200).json({
    con: true,
    msg,
    result,
  });
};

module.exports = {
  fMsg,
  encode: (password) => bcrypt.hashSync(password),
  comparePass: (text, hash) => bcrypt.compareSync(text, hash),
  generateToken:(payload)=>jwt.sign(payload,process.env.SECRET_KEY)
};
