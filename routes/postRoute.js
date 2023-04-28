const router = require("express").Router();
const controller = require("../controllers/postController");
const {
  validateToken,
  validateBody,
  validateParam,
} = require("../utility/validator");
const { PostSchema, AllSchema } = require("../utility/schema");
const { filesave } = require("../utility/Gallery");

router.get("/", controller.all);
router.get("/cat/:catid", controller.getCategoryPost);
router.get("/user/:userid", controller.getAuthorPost);
router.get("/tag/:tagid", controller.getTagPosts);
router.get(
  "/paginate/:page",
  validateParam(AllSchema.page,"page"),
  controller.paginate
);
router.post(
  "/",
  validateToken,
  filesave,
  validateBody(PostSchema),
  controller.post
);

router
  .route("/:id")
  .get(controller.get)
  .patch(validateToken, controller.patch)
  .delete(validateToken, controller.drop);

module.exports = router;
