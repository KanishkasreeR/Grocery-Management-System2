const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const Product = require('./addproduct.js');
const wishlists = require('./Wishlist.js');
const Cart = require('./Cart.js');
const Order = require('./OrderSchema.js')

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

cloudinary.config({
  cloud_name: 'djxbzcayc',
  api_key: '177435834375344',
  api_secret: 'VC8o4lQSa551ADbsUtPtV3jIaO4'
});

const upload = multer({ storage: storage }).single('image');

router.use(function(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    console.error('Multer error:', err);
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File size too large. Maximum 5MB allowed.' });
    } else {
      return res.status(400).json({ error: 'File upload error' });
    }
  } else if (err) {
    console.error('Unknown error:', err);
    res.status(500).json({ error: 'Internal server error' });
  } else {
    next();
  }
});

router.post('/upload', (req, res) => {
  upload(req, res, async (err) => {
      if (err) {
          console.error('Multer error:', err);
          return res.status(400).json({ error: 'File upload error' });
      }

      try {
          const { productName, adminId, price, quantity, description, category } = req.body;
          const image = req.file.path; 
          const cloudinaryResponse = await cloudinary.uploader.upload(image);

          const product = new Product({
              productName,
              adminId, 
              price,
              quantity,
              description,
              category,
              imageUrl: cloudinaryResponse.url 
          });
          await product.save();

          res.status(200).json({ message: 'Product added successfully' });
      } catch (error) {
          console.error('Error occurred while adding product:', error);
          res.status(500).json({ error: 'Internal server error' });
      }
  });
});

router.get('/products', async (req, res) => {
  try {
    const { adminId } = req.query; 

    if (!adminId) {
      return res.status(400).json({ error: 'Admin ID is required' });
    }

    const products = await Product.find({ adminId }); 
    res.status(200).json({ products });
  } catch (error) {
    console.error('Error occurred while retrieving products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.patch('/editproduct/:id', async (req, res) => {
  try {
    const { productName, price, description, quantity, category } = req.body;

    const updateFields = {
      productName,
      price,
      description,
      quantity,
      category
    };

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updateFields, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ status: 'failure', message: 'Product not found' });
    }

    res.status(200).json({ status: 'success', message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    console.error('Error occurred while updating product:', error);
    res.status(500).json({ status: 'failure', message: 'Could not update product', error: error });
  }
});

router.delete('/deleteproduct/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ status: 'failure', message: 'Product not found' });
    }

    await wishlists.updateMany(
      { products: productId },
      { $pull: { products: productId } }
    );

    await Cart.updateMany(
      { products: productId },
      { $pull: { products: productId } }
    );

    res.status(200).json({ status: 'success', message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error occurred while deleting product:', error);
    res.status(500).json({ status: 'failure', message: 'Could not delete product', error: error });
  }
});

router.get('/search', async (req, res) => {
  try {
    const { keyword, adminId } = req.query;
    let query = { adminId };

    if (keyword) {
      query.$or = [
        { productName: { $regex: keyword, $options: 'i' } }, 
        { category: { $regex: keyword, $options: 'i' } } 
      ];
    }

    const products = await Product.find(query);

    res.status(200).json({ status: 'success', products });
  } catch (error) {
    console.error('Error occurred while searching products:', error);
    res.status(500).json({ status: 'failure', message: 'Could not search products', error });
  }
});

router.post('/addToWishlist', async (req, res) => {
  try {
    const { productId, customerId, adminId } = req.body;
    console.log(adminId);

    if (!productId || !customerId || !adminId) {
      return res.status(400).json({ error: 'Missing productId, customerId, or adminId' });
    }

    let wishlist = await wishlists.findOne({ customerId });
    if (!wishlist) {
      wishlist = new wishlists({ customerId, products: [], adminId }); 
      console.log(wishlist.adminId);
    }
    console.log(wishlist);
    console.log(wishlist.adminId);
    if (wishlist.products.includes(productId)) {
      return res.status(400).json({ error: 'Product already exists in wishlist' });
    }
    wishlist.products.push(productId);
   
    await wishlist.save();
    res.status(200).json({ message: 'Product added to wishlist successfully' });
  } catch (error) {
    console.error('Error adding product to wishlist:', error);
    res.status(500).json({ error: 'Failed to add product to wishlist' });
  }
});


router.post('/addToCart', async (req, res) => {
  try {
    const { productId, customerId, adminId } = req.body;
    if (!productId || !customerId || !adminId) {
      return res.status(400).json({ error: 'Missing productId, customerId, or adminId' });
    }
    let cart = await Cart.findOne({ customerId });

    if (!cart) {
      cart = new Cart({ customerId, adminId, products: [] });
    }
    if (cart.products.includes(productId)) {
      return res.status(400).json({ error: 'Product already exists in Cart' });
    }

    cart.products.push(productId);
    
    await cart.save();
    res.status(200).json({ message: 'Product added to Cart successfully' });
  } catch (error) {
    console.error('Error adding product to Cart:', error);
    res.status(500).json({ error: 'Failed to add product to Cart' });
  }
});

router.post('/addToCart2', async (req, res) => {
  try {
    const { productId, customerId, adminId } = req.body;

    if (!productId || !customerId || !adminId) {
      return res.status(400).json({ error: 'Missing productId, customerId, or adminId' });
    }

    let cart = await Cart.findOne({ customerId });

    if (!cart) {
      cart = new Cart({ customerId, adminId, products: [] });
    }

    if (cart.products.includes(productId)) {
      return res.status(400).json({ error: 'Product already exists in Cart' });
    }

    cart.products.push(productId);

    await cart.save();

    res.status(200).json({ message: 'Product added to Cart successfully' });
  } catch (error) {
    console.error('Error adding product to Cart:', error);
    res.status(500).json({ error: 'Failed to add product to Cart' });
  }
});



router.get('/wishlist', async (req, res) => {
  try {
    const { customerId } = req.query;
    const wishlist = await wishlists.findOne({ customerId }).populate('products');
    res.json(wishlist.products);
  } catch (error) {
    console.error('Error fetching wishlist products:', error);
    res.status(500).json({ error: 'Failed to fetch wishlist products' });
  }
});

router.get('/cart', async (req, res) => {
  try {
    const { customerId } = req.query;
    const cart = await Cart.findOne({ customerId }).populate('products'); 
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }
    res.json(cart.products);
  } catch (error) {
    console.error('Error fetching cart products:', error);
    res.status(500).json({ error: 'Failed to fetch cart products' });
  }
});


router.get('/products/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

router.delete('/removewishlist/:customerId/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const customerId = req.params.customerId;

    const wishlist = await wishlists.findOneAndUpdate(
      { customerId: customerId },
      { $pull: { products: productId } },
      { new: true }
    );

    if (!wishlist) {
      return res.status(404).json({ error: 'Wishlist not found' });
    }

    res.json(wishlist);
  } catch (error) {
    console.error('Error removing product from wishlist:', error);
    res.status(500).json({ error: 'Failed to remove product from wishlist' });
  }
});

router.delete('/removecart/:customerId/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const customerId = req.params.customerId;
    const wishlist = await Cart.findOneAndUpdate(
      { customerId: customerId },
      { $pull: { products: productId } },
      { new: true }
    );

    if (!wishlist) {
      return res.status(404).json({ error: 'Wishlist not found' });
    }

    res.json(wishlist);
  } catch (error) {
    console.error('Error removing product from wishlist:', error);
    res.status(500).json({ error: 'Failed to remove product from wishlist' });
  }
});

const nodemailer = require('nodemailer');

router.post('/orders', async (req, res) => {
  const { customerId, adminId, products, totalPrice } = req.body;

  try {
    const newOrder = new Order({
      customerId,
      products: products.map(product => ({
        productId: product.productId,
        productName: product.productName,
        description: product.description,
        price: product.price,
        category: product.category,
        quantity: product.quantity, 
        imageUrl: product.imageUrl
      })),
      adminId,
      totalPrice,
      orderDate: Date.now()
    });

    const savedOrder = await newOrder.save();

    const productIds = products.map(product => product.productId);
    await Cart.updateOne(
      { customerId: customerId },
      { $pull: { products: { $in: productIds }  } }
    );

    await sendEmailToAdmin(customerId, adminId);

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Failed to create order', error });
  }
});
const Admin = require("./Adminmodel");

require('dotenv').config({ path: "./config.env" });

async function sendEmailToAdmin(userId, sellerId) {
  try {
    const seller = await Admin.findById(sellerId);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: seller.email,
      subject: 'New Order Notification',
      text: `Dear ${seller.name},\n\nYou have a new order on your website. Please login to your account to view the details.\n\nBest regards,\nThe Team`
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
const User = require("./Usermodel"); 
router.post('/update-order-status', async (req, res) => {
  const { userId, sellerId, orderId, action } = req.body;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (action === 'accept') {
      order.status = 'Accepted';
    } else if (action === 'decline') {
      order.status = 'Declined';
    } else {
      return res.status(400).json({ message: 'Invalid action' });
    }

    await order.save();
    await sendEmail(userId, sellerId, orderId, action);

    res.status(200).json({ message: `Order ${action}ed successfully` });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

async function sendEmail(userId, sellerId, orderId, action) {
  try {
    const seller = await Admin.findById(sellerId);
    const customer = await User.findById(userId);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: customer.email,
      subject: action === 'accept' ? 'Order Confirmation' : 'Order Declined',
      text: action === 'accept' 
        ? `Dear ${customer.name},\n\nYour order ${orderId} has been confirmed. Please log in to your account to view the details.\n\nBest regards,\n${seller.name}`
        : `Dear ${customer.name},\n\nWe regret to inform you that your order ${orderId} has been declined.\nBest regards,\n${seller.name}`
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

router.get('/getorders', async (req, res) => {
  const { adminId } = req.query;

  try {
    console.log(`Fetching orders for adminId: ${adminId}`);
    const orders = await Order.find({ adminId });
    console.log(`Fetched orders: ${JSON.stringify(orders)}`);
    
    if (orders.length === 0) {
      console.log(`No orders found for adminId: ${adminId}`);
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Failed to fetch orders', error });
  }
});

router.get('/getcustomerorders', async (req, res) => {
  const { customerId } = req.query;

  try {
    console.log(`Fetching orders for customerId: ${customerId}`);
    const orders = await Order.find({ customerId });
    console.log(`Fetched orders: ${JSON.stringify(orders)}`);
    
    if (orders.length === 0) {
      console.log(`No orders found for customerId: ${customerId}`);
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Failed to fetch orders', error });
  }
});

router.put('/editproduct2/:id', async (req, res) => {
  const { productName, adminId, price, quantity, description, category, imageUrl } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { productName, adminId, price, quantity, description, category, imageUrl },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ status: 'failure', message: 'Product not found' });
    }

    res.status(200).json({ status: 'success', message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    console.error('Error occurred while updating product:', error);
    res.status(500).json({ status: 'failure', message: 'Could not update product', error: error });
  }
});

module.exports = router;


