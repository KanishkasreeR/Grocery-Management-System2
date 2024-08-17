import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import './UserCart.css';
import UserNavbar from './UserNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactToPrint from 'react-to-print';

const Cart = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const customerId = searchParams.get('customerId');

  const [cartProducts, setCartProducts] = useState([]);
  const [adminData, setAdminData] = useState({});
  const [showBill, setShowBill] = useState(false);
  const [billDetails, setBillDetails] = useState(null);
  const [quantityCount, setQuantityCount] = useState({});

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        if (!customerId) return;

        const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/cart?customerId=${customerId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch cart products');
        }
        const cartData = await response.json();

        const fetchedProducts = await Promise.all(cartData.map(async (productId) => {
          const productResponse = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/products/${productId}`);
          if (!productResponse.ok) {
            throw new Error('Failed to fetch product');
          }
          const product = await productResponse.json();

          const adminResponse = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/admin/${product.adminId}`);
          if (!adminResponse.ok) {
            throw new Error('Failed to fetch admin details');
          }
          const adminData = await adminResponse.json();
          product.storeName = adminData.admin.storeName;

          return product;
        }));

        setCartProducts(fetchedProducts);
        const initialQuantityCount = {};
        fetchedProducts.forEach(product => {
          initialQuantityCount[product._id] = 1;
        });
        setQuantityCount(initialQuantityCount);
      } catch (error) {
        console.error('Error fetching cart products:', error);
      }
    };

    fetchCartProducts();
  }, [customerId]);

  useEffect(() => {
    const categorizeProductsByAdmin = () => {
      const adminData = {};
      cartProducts.forEach(product => {
        const adminId = product.adminId;
        if (!adminData[adminId]) {
          adminData[adminId] = [];
        }
        adminData[adminId].push(product);
      });
      setAdminData(adminData);
    };

    categorizeProductsByAdmin();
  }, [cartProducts]);

  const updateQuantity = (productId, delta) => {
    setQuantityCount(prevCounts => ({
      ...prevCounts,
      [productId]: Math.max(prevCounts[productId] + delta, 1)
    }));
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/removecart/${customerId}/${productId}`, { method: 'DELETE' });
      if (!response.ok) {
        toast.error("Failed to remove product from cart");
      } else {
        toast.success("Product removed from cart successfully!");
        setCartProducts(cartProducts.filter(product => product._id !== productId));
      }
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  const checkout = async (adminId) => {
    const products = adminData[adminId];
    const totalPrice = products.reduce((total, product) => total + (product.price * quantityCount[product._id]), 0);

    const orderDetails = {
      customerId,
      adminId,
      products: products.map(product => ({
        productId: product._id,
        productName: product.productName,
        description: product.description,
        price: product.price,
        category: product.category,
        quantity: quantityCount[product._id],
        imageUrl: product.imageUrl
      })),
      totalPrice
    };

    try {
      const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      toast.success('Order placed successfully!');
      setCartProducts(prevProducts => prevProducts.filter(product => product.adminId !== adminId));
      setBillDetails({ adminId, storeName: products[0].storeName, totalPrice, products });
      setShowBill(true);
    } catch (error) {
      console.error('Error creating order:', error);
      toast.error('Failed to place order');
    }
  };

  const downloadBill = () => {
    const element = document.createElement('a');
    const file = new Blob([document.getElementById('bill-details').innerText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'bill.txt';
    document.body.appendChild(element);
    element.click();
  };

  const printBill = () => {
    const printContent = document.getElementById('bill-details').innerHTML;
    const newWindow = window.open('', '', 'height=500, width=500');
    newWindow.document.write('<html><body>');
    newWindow.document.write(printContent);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.print();
  };

  const componentRef = useRef();

  return (
    <>
      <UserNavbar />
      <ToastContainer autoClose={2000} />
      <br/><br/>
      <div className="cart-page">
        {cartProducts.length === 0 ? (
          <div className="empty-cart-message">
            <h2>Your cart is empty</h2>
            <p>Start shopping now!</p>
          </div>
        ) : (
          Object.entries(adminData).map(([adminId, products]) => (
            <div key={adminId} className="admin-cart">
              <h2>{products[0].storeName}</h2>
              <div className="cart-container">
                {products.map(product => (
                  <div key={product._id} className="cart-item">
                    <img src={product.imageUrl} alt={product.productName} />
                    <div className="cart-details">
                      <h4>{product.productName}</h4>
                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(product._id, -1)}><FaMinus className="minus" /></button>
                        <h4>{quantityCount[product._id]}</h4>
                        <button onClick={() => updateQuantity(product._id, 1)}><FaPlus className="plus" /></button>
                      </div>
                      <h4>Quantity: {product.quantity}</h4>
                      <h4>Price: Rs. {product.price}</h4>
                      <div className="buttons">
                        <button className='remove-btn' onClick={() => removeFromCart(product._id)}><FaTrash className="remove-icon" /> Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="admin-info">
                <div>Total: ${products.reduce((total, product) => total + (product.price * quantityCount[product._id]), 0)}</div>
                <button className="checkout-btn" onClick={() => checkout(adminId)}>Checkout</button>
              </div>
            </div>
          ))
        )}
      </div>
      {showBill && (
        <div className="bill-popup">
          <div ref={componentRef}>
            <div id="bill-details">
              <button className="close-btn" onClick={() => setShowBill(false)}>X</button>
              <h2>Order Details</h2>
              <p>Store: {billDetails.storeName}</p>
              <p>Total Price: Rs. {billDetails.totalPrice}</p>
              <h3>Ordered Products:</h3>
              {billDetails.products.map((product, index) => (
                <div key={index} className="product">
                  <p>{product.productName} (x{product.quantity})</p>
                  <p>${product.price}</p>
                </div>
              ))}
            </div>
          </div>
          <ReactToPrint
            trigger={() => <button className="print-btn">Print Bill</button>}
            content={() => componentRef.current}
          />
          <button className="download-btn" onClick={downloadBill}>Download Bill</button>
        </div>
      )}
    </>
  );
};

export default Cart;







