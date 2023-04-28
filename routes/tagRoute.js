const router = require("express").Router();
const controller = require("../controllers/tagController");
const { filesave } = require("../utility/Gallery");
const {
  validateToken,
  validateBody,
  validateParam,
} = require("../utility/validator");
const { TagSchema, AllSchema } = require("../utility/schema");

router.get("/", controller.all);
router.post(
  "/",
  validateToken,
  filesave,
  validateBody(TagSchema),
  controller.add
);

router
  .route("/:id")
  .get(validateParam(AllSchema.id,"id"), controller.get)
  .patch(validateToken, validateParam(AllSchema.id,"id"), controller.patch)
  .delete(validateToken, validateParam(AllSchema.id,"id"), controller.drop);

module.exports = router;
