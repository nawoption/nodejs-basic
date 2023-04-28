const router = require("express").Router();
const controller = require("../controllers/userController");
const {RegisterSchema}  = require('../utility/schema')
const {validateBody} = require("../utility/validator");

router.post("/login", controller.login);
router.post("/register",validateBody(RegisterSchema) ,controller.register);

module.exports = router;
