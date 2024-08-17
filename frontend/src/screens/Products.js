import React, { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import './Products.css'

const Product = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const adminId = searchParams.get('adminId');
  const customerId = searchParams.get('customerId');

  const [adminName, setAdminName] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (adminId) {
      fetchAdminDetails(adminId);
    }
  }, [adminId]);

  const fetchAdminDetails = async (adminId) => {
    try {
      const response = await fetch(
        `https://grocery-management-system-backend-7.onrender.com/api/admin?adminId=${adminId}`
      );
      if (response.ok) {
        const data = await response.json();
        setAdminName(data.admin.name.charAt(0).toUpperCase() + data.admin.name.slice(1)); 
      } else {
        console.error("Failed to fetch admin details");
      }
    } catch (error) {
      console.error("Error fetching admin details:", error);
    }
  };

  useEffect(() => {
    if (adminId) {
      fetchProducts(adminId);
    }
  }, [adminId]);

  const fetchProducts = async (adminId) => {
    try {
      const response = await fetch(
        `https://grocery-management-system-backend-7.onrender.com/api/products?adminId=${adminId}`
      );
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products); 
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearch = async (searchQuery) => {
    try {
      const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/search?keyword=${searchQuery}&adminId=${adminId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      if (data.products.length === 0) {
        toast.info('Product not found');
      } else {
        setFilteredProducts(data.products);
      }
    } catch (error) {
      console.error("Error occurred while searching products:", error);
    }
  };

  const groupProductsByCategory = () => {
    const groupedProducts = {};
    filteredProducts.forEach(product => {
      if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = [];
      }
      groupedProducts[product.category].push(product);
    });
    return groupedProducts;
  };

  const addToWishlist = async (productId, adminId) => {
    try {
      const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/addToWishlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, customerId, adminId }), 
      });
      if (response.ok) {
        toast.success('Product added to wishlist!');
      } else {
        throw new Error('Failed to add product to wishlist');
      }
    } catch (error) {
      console.error('Error adding product to wishlist:', error);
      toast.error('Product already exists in wishlist');
    }
  };

  const addToCart = async (productId, adminId) => {
    try {
      const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/addToCart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, customerId, adminId }), 
      });
      if (response.ok) {
        toast.success('Product added to Cart!');
      } else {
        throw new Error('Failed to add product to Cart');
      }
    } catch (error) {
      console.error('Error adding product to Cart:', error);
      toast.error('Product already exists in Cart');
    }
  };

  return (
    <>
      <div>
        <UserNavbar handleSearch={handleSearch} className="navbar" />
        <div className="admin-content">
          <br/><br/>
          {filteredProducts.length === 0 ? (
            <p className="no-products-message">No products available.</p>
          ) : (
            Object.entries(groupProductsByCategory()).map(([category, categoryProducts]) => (
              <div key={category}>
                <h3 style={{ marginTop: '20px' }}>{category}</h3>
                <div className="product-list">
                  {categoryProducts.map((product, index) => (
                    <div key={index} className="product-card">
                      <img src={product.imageUrl} alt={product.productName} />
                      <div className="product-details">
                        <h4>{product.productName}</h4>
                        <p>Price: Rs. {product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>{product.description}</p>
                        <p className="invisible">{product.category}</p>
                        <div className="buttons1">
                          <button className="wishlist-btn" onClick={() => addToWishlist(product._id, product.adminId)}>
                            <FaHeart className="wishlist-icon" /> Wishlist
                          </button>
                          <button className="cart-btn" onClick={() => addToCart(product._id, product.adminId)}>
                            <FaShoppingCart className="cart-icon"/> Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Product;





