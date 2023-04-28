const fs = require("fs");
const filesave = async (req, res, next) => {
  let file = req.files.file;
  let filename = new Date().valueOf() + "_" + file.name;
  file.mv(`./uploads/${filename}`);
  req.body["image"] = filename;
  next();
};

const multiFileSave = async (req, res, next) => {
  let files = req.files.files;
  let filenames = [];
  files.forEach((file) => {
    let filename = new Date().valueOf() + "_" + file.name;
    filenames.push(filename);
    file.mv(`./uploads/${filename}`);
  });
  req.body["images"] = filenames.join(",");
  next();
};

const deleteFile = async (filename) => {
  fs.unlinkSync(`./uploads/${filename}`);
};

module.exports = {
  filesave,
  multiFileSave,
  deleteFile,
};
