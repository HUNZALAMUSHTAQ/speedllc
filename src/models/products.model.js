const mongoose = require('mongoose');
const product = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    productImages: {
        type: Array, 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', product);

module.exports = Product;
