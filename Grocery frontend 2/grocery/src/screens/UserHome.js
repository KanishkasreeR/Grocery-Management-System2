// import React, { useEffect, useState } from "react";
// // import Navbar from "./CustomerNavbar";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link, useLocation } from "react-router-dom";

// const CustomerHome = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const customerId = searchParams.get('customerId');

//   const [customerName, setCustomerName] = useState('');
//   const [cartDetails, setCartDetails] = useState(null);

//   // Fetch customer details
//   useEffect(() => {
//     if (customerId) {
//       fetchCustomerDetails(customerId);
//     }
//   }, [customerId]);

//   const fetchCustomerDetails = async (customerId) => {
//     try {
//       const response = await fetch(
//         `https://grocery-management-system-backend-7.onrender.com/api/customer?customerId=${customerId}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setCustomerName(data.customer.name.charAt(0).toUpperCase() + data.customer.name.slice(1)); // Capitalize first letter
//       } else {
//         console.error("Failed to fetch customer details");
//       }
//     } catch (error) {
//       console.error("Error fetching customer details:", error);
//     }
//   };

//   // Fetch cart details
//   useEffect(() => {
//     if (customerId) {
//       fetchCartDetails(customerId);
//     }
//   }, [customerId]);

//   const fetchCartDetails = async (customerId) => {
//     try {
//       const response = await fetch(
//         `https://grocery-management-system-backend-7.onrender.com/api/admins`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setCartDetails(data.cart);
//       } else {
//         console.error("Failed to fetch cart details");
//       }
//     } catch (error) {
//       console.error("Error fetching cart details:", error);
//     }
//   };

//   return (
//     <>
//       <div>
//         {/* <Navbar customerId={customerId} className="navbar" /> */}
//         <div className="customer-content">
//           <h2>Welcome, {customerName}!</h2>
//           {cartDetails && (
//             <div className="cart">
//               <h3>Shopping Cart</h3>
//               <div className="cart-details">
//                 <p>Store Image: <img src={cartDetails.storeImage} alt="Store" /></p>
//                 <p>Store Name: {cartDetails.storeName}</p>
//                 <p>Store Hours: {cartDetails.storeHours}</p>
//                 <p>Store Address: {cartDetails.storeAddress}</p>
//                 {/* Admin ID should be present but invisible */}
//                 <p className="invisible">Admin ID: {cartDetails.adminId}</p>
//                 {/* You can add more details here */}
//                 <Link to="/shop-now">
//                   <button>Shop Now</button>
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default CustomerHome;


// import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link, useLocation } from "react-router-dom";
// import UserNavbar from "./UserNavbar";
// import './UserHome.css'

// const CustomerHome = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const customerId = searchParams.get('customerId');

//   const [customerName, setCustomerName] = useState('');
//   const [cartDetails, setCartDetails] = useState(null);

//   // Fetch customer details
//   useEffect(() => {
//     if (customerId) {
//       fetchCustomerDetails(customerId);
//     }
//   }, [customerId]);

//   const fetchCustomerDetails = async (customerId) => {
//     try {
//       const response = await fetch(
//         `https://grocery-management-system-backend-7.onrender.com/api/customer?customerId=${customerId}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setCustomerName(data.customer.name.charAt(0).toUpperCase() + data.customer.name.slice(1)); // Capitalize first letter
//       } else {
//         console.error("Failed to fetch customer details");
//       }
//     } catch (error) {
//       console.error("Error fetching customer details:", error);
//     }
//   };

//   // Fetch cart details
//   useEffect(() => {
//     if (customerId) {
//       fetchCartDetails(customerId);
//     }
//   }, [customerId]);

//   const fetchCartDetails = async (customerId) => {
//     try {
//       const response = await fetch(
//         `https://grocery-management-system-backend-7.onrender.com/api/admins`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setCartDetails(data); // Assuming the response contains cart details
//       } else {
//         console.error("Failed to fetch cart details");
//       }
//     } catch (error) {
//       console.error("Error fetching cart details:", error);
//     }
//   };

//   return (
//     <>
//     <UserNavbar/>
//       <div>
//         <div className="customer-content">
//          <br/><br/><br/><br/>
//           <h2>Welcome, {customerName}!</h2>
//           {cartDetails !== null && cartDetails.length > 0 && (
//             <div className="cart">
//               <div className="cart-details">
//                 {cartDetails.map((cartItem, index) => (
//                   <div key={index}>
//                     <img src={cartItem.storeImage} alt="Store" />
//                     {cartItem.storeName}
//                     <p>Working Hours: {cartItem.storeHours}</p>
//                     <p>Address: {cartItem.storeAddress}</p>
//                     <p className="invisible">Admin ID: {cartItem._id}</p>
//                     <Link to="/shop-now">
//                    <button>Shop Now</button>
//                    </Link>
//                   </div>
//                 ))}
               
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default CustomerHome;

// import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link, useLocation } from "react-router-dom";
// import UserNavbar from "./UserNavbar";
// import './UserHome.css'

// const CustomerHome = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const customerId = searchParams.get('customerId');

//   const [customerName, setCustomerName] = useState('');
//   const [cartDetails, setCartDetails] = useState(null);

//   // Fetch customer details
//   useEffect(() => {
//     if (customerId) {
//       fetchCustomerDetails(customerId);
//     }
//   }, [customerId]);

//   const fetchCustomerDetails = async (customerId) => {
//     try {
//       const response = await fetch(
//         `https://grocery-management-system-backend-7.onrender.com/api/customer?customerId=${customerId}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setCustomerName(data.customer.name.charAt(0).toUpperCase() + data.customer.name.slice(1)); // Capitalize first letter
//       } else {
//         console.error("Failed to fetch customer details");
//       }
//     } catch (error) {
//       console.error("Error fetching customer details:", error);
//     }
//   };

//   // Fetch cart details
//   useEffect(() => {
//     if (customerId) {
//       fetchCartDetails(customerId);
//     }
//   }, [customerId]);

//   const fetchCartDetails = async (customerId) => {
//     try {
//       const response = await fetch(
//         `https://grocery-management-system-backend-7.onrender.com/api/admins`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setCartDetails(data); // Assuming the response contains cart details
//       } else {
//         console.error("Failed to fetch cart details");
//       }
//     } catch (error) {
//       console.error("Error fetching cart details:", error);
//     }
//   };

//   return (
//     <>
//       <UserNavbar />
//       <div className="customer-content">
//         <div className="welcome-message">
//           <h2>Welcome, {customerName}!</h2>
//         </div>
//         {cartDetails !== null && cartDetails.length > 0 && (
//           <div className="cart-details">
//             {cartDetails.map((cartItem, index) => (
//               <div key={index} className="cart-item">
//                 <img src={cartItem.storeImage} alt="Store" />
//                 <p>{cartItem.storeName}</p>
//                 <p>Working Hours: {cartItem.storeHours}</p>
//                 <p>Address: {cartItem.storeAddress}</p>
//                 <p className="invisible">Admin ID: {cartItem._id}</p>
//                 {/* <Link to="/shop-now">
//                   <button>Shop Now</button>
//                 </Link> */}
//                 <Link to={{pathname: "/products",search: `?customerId=${customerId}&adminId=${cartItem._id}`}}>
//                       <button>Shop Now</button>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default CustomerHome;

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

  // Fetch customer details
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
        setCustomerName(data.customer.name.charAt(0).toUpperCase() + data.customer.name.slice(1)); // Capitalize first letter
      } else {
        console.error("Failed to fetch customer details");
      }
    } catch (error) {
      console.error("Error fetching customer details:", error);
    }
  };

  // Fetch cart details
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
        setCartDetails(data); // Assuming the response contains cart details
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



