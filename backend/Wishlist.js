const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
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

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
