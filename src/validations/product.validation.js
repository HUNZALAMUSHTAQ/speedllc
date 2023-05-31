const Joi = require('joi');
const productValidator = {
  body: Joi.object().keys({
    productImages: Joi.array().required(),
    name: Joi.string().required(),
    details: Joi.string().required(),
    price: Joi.number().required(),
  }),
};

module.exports = {
  productValidator,
};
