const Product = require('../models/products.model');
const catchAsync = require('../utils/catchAsync');

const addProduct = catchAsync(async (req, res) => {
  const { productImages, name, details, price } = req.body;
  if (!req.user._id) {
    return res.json({ error: 'No user found' });
  }
  const user = req.user._id;
  const newProduct = await Product.create({ productImages, name, details, price, user: user });

  res.json(newProduct);
});


const getProductById = catchAsync(async (req, res) => {
  if (!req.user._id) {
    return res.json({ error: 'No user found' });
  }
  const user = req.user._id;
  const newProduct = await Product.find({user: user});

  res.json(newProduct);
});
const getAllProducts = catchAsync(async (req, res) => {
  const allProducts = await Product.find();

  res.json(allProducts);
});

module.exports = {
  addProduct,
  getProductById,
  getAllProducts
}