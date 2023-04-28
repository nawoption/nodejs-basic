const Joi = require("joi");

module.exports = {
  AddCat: Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    user: Joi.optional(),
  }),
  AllSchema: {
    id: Joi.object({
      id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
    }),
    page: Joi.object({
      page: Joi.number().required(),
    }),
  },
  RegisterSchema: Joi.object({
    name: Joi.string().required().min(6),
    email: Joi.string().required().email(),
    phone: Joi.string().min(8).max(12).required(),
    password: Joi.string().required().min(8).max(25),
  }),
  PostSchema: Joi.object({
    category: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required(),
    tag: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required(),
    image: Joi.string().required(),
    title: Joi.string().required(),
    desc: Joi.string().required(),
    user: Joi.optional(),
  }),
  TagSchema: Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    user: Joi.optional(),
  }),
  CommentSchema: Joi.object({
    name: Joi.string().required().min(6),
    email: Joi.string().required().email(),
    content: Joi.string().required(),
    postId: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required(),
  }),
};
