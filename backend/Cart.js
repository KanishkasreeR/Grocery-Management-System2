const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  customerId: {
    type: String,
  },
  products: [{
    type: String, 
  }],
  adminId:{
    type: String,
  }
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
