const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { productValidation } = require('../../validations');
const { productController } = require('../../controllers');

const router = express.Router();
router
  .route('/')
  .get(auth('forUser'),  productController.getProductById)
  .post(auth('forUser'), validate(productValidation.productValidator), productController.addProduct);
router
  .route('/all')
  .get(auth('forUser'),  productController.getAllProducts)
module.exports = router;

