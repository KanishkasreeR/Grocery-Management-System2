// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './OrderPage.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import UserNavbar from './UserNavbar';

// const UserOrderPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const customerId = searchParams.get('customerId');

//   const [orders, setOrders] = useState([]);
//   const [productDetails, setProductDetails] = useState({});
//   const [storeNames, setStoreNames] = useState({});

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getcustomerorders?customerId=${customerId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch orders');
//         }
//         const ordersData = await response.json();

//         // Sort orders from latest to oldest
//         ordersData.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));

//         setOrders(ordersData);
//         await fetchProductDetails(ordersData);
//         await fetchStoreNames(ordersData);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//         toast.error('Failed to fetch orders');
//       }
//     };

//     const fetchProductDetails = async (orders) => {
//       const productIds = [...new Set(orders.flatMap(order => order.products.map(product => product.productId)))];
//       try {
//         const productDetailsData = await Promise.all(productIds.map(async productId => {
//           const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/products/${productId}`);
//           if (!response.ok) {
//             throw new Error(`Failed to fetch product details for ID: ${productId}`);
//           }
//           return await response.json();
//         }));
//         const productDetailsMap = productDetailsData.reduce((acc, product) => {
//           acc[product._id] = product;
//           return acc;
//         }, {});
//         setProductDetails(productDetailsMap);
//       } catch (error) {
//         console.error('Error fetching product details:', error);
//         toast.error('Failed to fetch product details');
//       }
//     };

//     const fetchStoreNames = async (orders) => {
//       const adminIds = [...new Set(orders.map(order => order.adminId))];
//       try {
//         const storeNamesData = await Promise.all(adminIds.map(async adminId => {
//           const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/admin?adminId=${adminId}`);
//           if (!response.ok) {
//             throw new Error(`Failed to fetch store name for admin ID: ${adminId}`);
//           }
//           const adminData = await response.json();
//           return { adminId, storeName: adminData.admin.storeName }; // Access nested admin object
//         }));
//         const storeNamesMap = storeNamesData.reduce((acc, { adminId, storeName }) => {
//           acc[adminId] = storeName;
//           return acc;
//         }, {});
//         setStoreNames(storeNamesMap);
//       } catch (error) {
//         console.error('Error fetching store names:', error);
//         toast.error('Failed to fetch store names');
//       }
//     };

//     fetchOrders();
//   }, [customerId]);

//   return (
//     <>
//       <UserNavbar />
//       <div className="order-page">
//         <br /><br /><br />
//         <ToastContainer autoClose={2000} />
//         {orders.length === 0 ? (
//           <p className="no-orders-message">No orders found for this customer.</p>
//         ) : (
//           orders.map(order => (
//             <div key={order._id} className="order">
//               <h4>Store: {storeNames[order.adminId]}</h4>
//               <h4>Order ID: {order._id}</h4>
//               <p><strong>Total Price:</strong> ${order.totalPrice}</p>
//               <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
//               <h3>Products</h3>
//               <div className="cart-products">
//                 {order.products.map(product => {
//                   const productDetail = productDetails[product.productId];
//                   return (
//                     <div key={product.productId} className="cart-product">
//                       {productDetail ? (
//                         <>
//                           <img src={productDetail.imageUrl} alt={productDetail.productName} />
//                           <p><strong>Product Name:</strong> {productDetail.productName}</p>
//                           <p><strong>Price:</strong> ${productDetail.price}</p>
//                         </>
//                       ) : (
//                         <p><strong>Product details not available</strong></p>
//                       )}
//                       <p><strong>Quantity:</strong> {product.quantity}</p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// };

// export default UserOrderPage;

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './OrderPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserNavbar from './UserNavbar';

const UserOrderPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const customerId = searchParams.get('customerId');

  const [orders, setOrders] = useState([]);
  const [storeNames, setStoreNames] = useState({});

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getcustomerorders?customerId=${customerId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const ordersData = await response.json();

        // Sort orders from latest to oldest
        ordersData.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));

        setOrders(ordersData);
        await fetchStoreNames(ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error('Failed to fetch orders');
      }
    };

    const fetchStoreNames = async (orders) => {
      const adminIds = [...new Set(orders.map(order => order.adminId))];
      try {
        const storeNamesData = await Promise.all(adminIds.map(async adminId => {
          const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/admin?adminId=${adminId}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch store name for admin ID: ${adminId}`);
          }
          const adminData = await response.json();
          return { adminId, storeName: adminData.admin.storeName }; // Access nested admin object
        }));
        const storeNamesMap = storeNamesData.reduce((acc, { adminId, storeName }) => {
          acc[adminId] = storeName;
          return acc;
        }, {});
        setStoreNames(storeNamesMap);
      } catch (error) {
        console.error('Error fetching store names:', error);
        toast.error('Failed to fetch store names');
      }
    };

    fetchOrders();
  }, [customerId]);

  return (
    <>
      <UserNavbar />
      <div className="order-page">
        <br /><br /><br />
        <ToastContainer autoClose={2000} />
        {orders.length === 0 ? (
          <p className="no-orders-message">No orders found for this customer.</p>
        ) : (
          orders.map(order => (
            <div key={order._id} className="order">
              <h4>Store: {storeNames[order.adminId]}</h4>
              <h4>Order ID: {order._id}</h4>
              <p><strong>Total Price:</strong> ${order.totalPrice}</p>
              <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
              <h3>Products</h3>
              <div className="cart-products">
                {order.products.map(product => (
                  <div key={product.productId} className="cart-product">
                    <img src={product.imageUrl} alt={product.productName} />
                    <p><strong>Product Name:</strong> {product.productName}</p>
                    <p><strong>Price:</strong> Rs. {product.price}</p>
                    <p><strong>Quantity:</strong> {product.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default UserOrderPage;

