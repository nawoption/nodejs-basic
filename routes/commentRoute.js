const controller = require("../controllers/commentController");
const {
  validateToken,
  validateParam,
  validateBody,
} = require("../utility/validator");
const { CommentSchema, AllSchema } = require("../utility/schema");
const router = require("express").Router();

router.get("/:id", validateParam(AllSchema.id,"id"), controller.all);
router.post("/", validateBody(CommentSchema), controller.add);
router.delete(
  "/:id",
  validateParam(AllSchema.id,"id"),
  validateToken,
  controller.drop
);

module.exports = router;
