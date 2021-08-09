const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  user_email: {
    type: String,
    unique: true,
  },
  products: [
    {
      id: {
        type: Number,
        required: [true, 'Please add an id'],
      },
      img: {
        type: String,
        required: false,
      },
      title: {
        type: String,
        required: [true, 'Please add an title'],
      },
      price: {
        type: Number,
        required: [true, 'Please add an price'],
      },
      currency_code: {
        type: Number,
        required: [true, 'Please add an currency code'],
      },
      amount: {
        type: Number,
        required: [true, 'Please add an id'],
      },
    },
  ],
});

module.exports = mongoose.models.Cart || mongoose.model('Cart', CartSchema);