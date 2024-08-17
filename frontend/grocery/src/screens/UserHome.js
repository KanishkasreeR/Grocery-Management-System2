import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import './UserHome.css'

const CustomerHome = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const customerId = searchParams.get('customerId');

  const [customerName, setCustomerName] = useState('');
  const [cartDetails, setCartDetails] = useState(null);

  useEffect(() => {
    if (customerId) {
      fetchCustomerDetails(customerId);
    }
  }, [customerId]);

  const fetchCustomerDetails = async (customerId) => {
    try {
      const response = await fetch(
        `https://grocery-management-system-backend-7.onrender.com/api/customer?customerId=${customerId}`
      );
      if (response.ok) {
        const data = await response.json();
        setCustomerName(data.customer.name.charAt(0).toUpperCase() + data.customer.name.slice(1)); 
      } else {
        console.error("Failed to fetch customer details");
      }
    } catch (error) {
      console.error("Error fetching customer details:", error);
    }
  };

  useEffect(() => {
    if (customerId) {
      fetchCartDetails(customerId);
    }
  }, [customerId]);

  const fetchCartDetails = async (customerId) => {
    try {
      const response = await fetch(
        `https://grocery-management-system-backend-7.onrender.com/api/admins`
      );
      if (response.ok) {
        const data = await response.json();
        setCartDetails(data); 
      } else {
        console.error("Failed to fetch cart details");
      }
    } catch (error) {
      console.error("Error fetching cart details:", error);
    }
  };

  return (
    <>
      <UserNavbar />
      <div className="customer-home-content">
        <div className="welcome-message-home">
          <h2>Welcome, {customerName}!</h2>
        </div>
        {cartDetails !== null && cartDetails.length > 0 && (
          <div className="cart-details-home">
            {cartDetails.map((cartItem, index) => (
              <div key={index} className="cart-item-home">
                <img src={cartItem.storeImage} alt="Store" />
                <p>{cartItem.storeName}</p>
                <p>Working Hours: {cartItem.storeHours}</p>
                <p>Address: {cartItem.storeAddress}</p>
                <p className="invisible">Admin ID: {cartItem._id}</p>
                <Link to={{ pathname: "/products", search: `?customerId=${customerId}&adminId=${cartItem._id}` }}>
                  <button>Shop Now</button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default CustomerHome;



