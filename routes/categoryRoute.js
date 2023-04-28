const router = require("express").Router();
const controller = require("../controllers/categoryController");
const { filesave } = require("../utility/Gallery");
const { AddCat, AllSchema } = require("../utility/schema");
const {
  validateBody,
  validateParam,
  validateToken,
} = require("../utility/validator");

router.get("/", controller.all);
router.post("/", validateToken, filesave, validateBody(AddCat), controller.add);

router
  .route("/:id")
  .get(validateParam(AllSchema.id, "id"), controller.get)
  .patch(validateToken, validateParam(AllSchema.id, "id"), controller.patch)
  .delete(validateToken, validateParam(AllSchema.id, "id"), controller.drop);

module.exports = router;
