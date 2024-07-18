// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './OrderPage.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from "./AdminNavbar";

// const OrderPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const adminId = searchParams.get('adminId');

//   const [orders, setOrders] = useState([]);
//   const [customerDetails, setCustomerDetails] = useState({});
//   const [productDetails, setProductDetails] = useState({});

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getorders?adminId=${adminId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch orders');
//         }
//         const ordersData = await response.json();
//         const today = new Date();
//         const startOfDay = new Date(today.setHours(0, 0, 0, 0));
//         const endOfDay = new Date(today.setHours(23, 59, 59, 999));

//         const todaysOrders = ordersData.filter(order => {
//           const orderDate = new Date(order.orderDate);
//           return orderDate >= startOfDay && orderDate <= endOfDay;
//         });
//         setOrders(todaysOrders);
//         await fetchCustomerDetails(todaysOrders);
//         await fetchProductDetails(todaysOrders);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//         toast.error('Failed to fetch orders');
//       }
//     };

//     const fetchCustomerDetails = async (orders) => {
//       const customerIds = [...new Set(orders.map(order => order.customerId))]; // Get unique customer IDs
//       try {
//         const customerDetailsData = await Promise.all(customerIds.map(async customerId => {
//           const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getcustomer?customerId=${customerId}`);
//           if (!response.ok) {
//             throw new Error(`Failed to fetch customer details for ID: ${customerId}`);
//           }
//           return await response.json();
//         }));
//         const customerDetailsMap = customerDetailsData.reduce((acc, customer) => {
//           acc[customer._id] = customer;
//           return acc;
//         }, {});
//         setCustomerDetails(customerDetailsMap);
//       } catch (error) {
//         console.error('Error fetching customer details:', error);
//         toast.error('Failed to fetch customer details');
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

//     fetchOrders();
//   }, [adminId]);

//   return (
//     <>
//       <Navbar />
//       <div className="order-page">
//         <h1>Orders</h1>
//         <ToastContainer autoClose={2000} />
//         {orders.length === 0 ? (
//           <p className="no-orders-message">No orders found for this admin.</p>
//         ) : (
//           orders.map(order => {
//             const customer = customerDetails[order.customerId];
//             return (
//               <div key={order._id} className="order">
//                 <h2>Order ID: {order._id}</h2>
//                 {customer ? (
//                   <div className="customer-details">
//                     <p><strong>Customer Name:</strong> {customer.name}</p>
//                     <p><strong>Customer Email:</strong> {customer.email}</p>
//                     <p><strong>Customer Phone:</strong> {customer.contactNumber}</p>
//                   </div>
//                 ) : (
//                   <p>Loading customer details...</p>
//                 )}
//                 <p><strong>Total Price:</strong> ${order.totalPrice}</p>
//                 <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
//                 <h3>Products</h3>
//                 <div className="cart-products">
//                   {order.products.map(product => {
//                     const productDetail = productDetails[product.productId];
//                     return (
//                       <div key={product.productId} className="cart-product">
//                         {productDetail ? (
//                           <>
//                             <img src={productDetail.imageUrl} alt={productDetail.productName} />
//                             <p><strong>Product Name:</strong> {productDetail.productName}</p>
//                             <p><strong>Price:</strong> ${productDetail.price}</p>
//                           </>
//                         ) : (
//                           <p>Loading product details...</p>
//                         )}
//                         <p><strong>Quantity:</strong> {product.quantity}</p>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </>
//   );
// };

// export default OrderPage;

// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './OrderPage.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from "./AdminNavbar";

// const OrderPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const adminId = searchParams.get('adminId');

//   const [orders, setOrders] = useState([]);
//   const [customerDetails, setCustomerDetails] = useState({});
//   const [productDetails, setProductDetails] = useState({});

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getorders?adminId=${adminId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch orders');
//         }
//         const ordersData = await response.json();
//         const today = new Date();
//         const startOfDay = new Date(today.setHours(0, 0, 0, 0));
//         const endOfDay = new Date(today.setHours(23, 59, 59, 999));

//         const todaysOrders = ordersData.filter(order => {
//           const orderDate = new Date(order.orderDate);
//           return orderDate >= startOfDay && orderDate <= endOfDay;
//         });
//         setOrders(todaysOrders);
//         await fetchCustomerDetails(todaysOrders);
//         await fetchProductDetails(todaysOrders);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//         toast.error('Failed to fetch orders');
//       }
//     };

//     const fetchCustomerDetails = async (orders) => {
//       const customerIds = [...new Set(orders.map(order => order.customerId))]; // Get unique customer IDs
//       try {
//         const customerDetailsData = await Promise.all(customerIds.map(async customerId => {
//           const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getcustomer?customerId=${customerId}`);
//           if (!response.ok) {
//             throw new Error(`Failed to fetch customer details for ID: ${customerId}`);
//           }
//           return await response.json();
//         }));
//         const customerDetailsMap = customerDetailsData.reduce((acc, customer) => {
//           acc[customer._id] = customer;
//           return acc;
//         }, {});
//         setCustomerDetails(customerDetailsMap);
//       } catch (error) {
//         console.error('Error fetching customer details:', error);
//         toast.error('Failed to fetch customer details');
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

//     fetchOrders();
//   }, [adminId]);

//   return (
//     <>
//       <Navbar />
//       <div className="order-page">
//         <h1>Orders</h1>
//         <ToastContainer autoClose={2000} />
//         {orders.length === 0 ? (
//           <p className="no-orders-message">No orders found for this admin.</p>
//         ) : (
//           orders.map(order => {
//             const customer = customerDetails[order.customerId];
//             return (
//               <div key={order._id} className="order">
//                 <h2>Order ID: {order._id}</h2>
//                 {customer ? (
//                   <div className="customer-details">
//                     <p><strong>Customer Name:</strong> {customer.name}</p>
//                     <p><strong>Customer Email:</strong> {customer.email}</p>
//                     <p><strong>Customer Phone:</strong> {customer.contactNumber}</p>
//                   </div>
//                 ) : (
//                   <p>Loading customer details...</p>
//                 )}
//                 <p><strong>Total Price:</strong> ${order.totalPrice}</p>
//                 <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
//                 <h3>Products</h3>
//                 <div className="cart-products">
//                   {order.products.map(product => {
//                     const productDetail = productDetails[product.productId];
//                     return (
//                       <div key={product.productId} className="cart-product">
//                         {productDetail ? (
//                           <>
//                             <img src={productDetail.imageUrl} alt={productDetail.productName} />
//                             <p><strong>Product Name:</strong> {productDetail.productName}</p>
//                             <p><strong>Price:</strong> ${productDetail.price}</p>
//                           </>
//                         ) : (
//                           <p><strong>Product details not available</strong></p>
//                         )}
//                         <p><strong>Quantity:</strong> {product.quantity}</p>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </>
//   );
// };

// export default OrderPage;

// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './OrderPage.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from "./AdminNavbar";

// const OrderPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const adminId = searchParams.get('adminId');

//   const [orders, setOrders] = useState({ todaysOrders: [], pastOrders: [] });
//   const [customerDetails, setCustomerDetails] = useState({});
//   const [productDetails, setProductDetails] = useState({});
//   const [view, setView] = useState('today'); // 'today' or 'past'

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getorders?adminId=${adminId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch orders');
//         }
//         const ordersData = await response.json();
//         const today = new Date();
//         const startOfDay = new Date(today.setHours(0, 0, 0, 0));
//         const endOfDay = new Date(today.setHours(23, 59, 59, 999));

//         const todaysOrders = ordersData.filter(order => {
//           const orderDate = new Date(order.orderDate);
//           return orderDate >= startOfDay && orderDate <= endOfDay;
//         });

//         const pastOrders = ordersData.filter(order => {
//           const orderDate = new Date(order.orderDate);
//           return orderDate < startOfDay || orderDate > endOfDay;
//         });

//         setOrders({ todaysOrders, pastOrders });
//         await fetchCustomerDetails(ordersData);
//         await fetchProductDetails(ordersData);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//         toast.error('Failed to fetch orders');
//       }
//     };

//     const fetchCustomerDetails = async (orders) => {
//       const customerIds = [...new Set(orders.map(order => order.customerId))]; // Get unique customer IDs
//       try {
//         const customerDetailsData = await Promise.all(customerIds.map(async customerId => {
//           const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getcustomer?customerId=${customerId}`);
//           if (!response.ok) {
//             throw new Error(`Failed to fetch customer details for ID: ${customerId}`);
//           }
//           return await response.json();
//         }));
//         const customerDetailsMap = customerDetailsData.reduce((acc, customer) => {
//           acc[customer._id] = customer;
//           return acc;
//         }, {});
//         setCustomerDetails(customerDetailsMap);
//       } catch (error) {
//         console.error('Error fetching customer details:', error);
//         toast.error('Failed to fetch customer details');
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

//     fetchOrders();
//   }, [adminId]);

//   const handleViewChange = (view) => {
//     setView(view);
//   };

//   const displayedOrders = view === 'today' ? orders.todaysOrders : orders.pastOrders;

//   return (
//     <>
//       <Navbar />
//       <div className="order-page">
//         <h1>Orders</h1>
//         <div className="view-buttons">
//           <button onClick={() => handleViewChange('today')}>Today's Orders</button>
//           <button onClick={() => handleViewChange('past')}>Past Orders</button>
//         </div>
//         <ToastContainer autoClose={2000} />
//         {displayedOrders.length === 0 ? (
//           <p className="no-orders-message">No orders found for this admin.</p>
//         ) : (
//           displayedOrders.map(order => {
//             const customer = customerDetails[order.customerId];
//             return (
//               <div key={order._id} className="order">
//                 <h2>Order ID: {order._id}</h2>
//                 {customer ? (
//                   <div className="customer-details">
//                     <p><strong>Customer Name:</strong> {customer.name}</p>
//                     <p><strong>Customer Email:</strong> {customer.email}</p>
//                     <p><strong>Customer Phone:</strong> {customer.contactNumber}</p>
//                   </div>
//                 ) : (
//                   <p>Loading customer details...</p>
//                 )}
//                 <p><strong>Total Price:</strong> ${order.totalPrice}</p>
//                 <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
//                 <h3>Products</h3>
//                 <div className="cart-products">
//                   {order.products.map(product => {
//                     const productDetail = productDetails[product.productId];
//                     return (
//                       <div key={product.productId} className="cart-product">
//                         {productDetail ? (
//                           <>
//                             <img src={productDetail.imageUrl} alt={productDetail.productName} />
//                             <p><strong>Product Name:</strong> {productDetail.productName}</p>
//                             <p><strong>Price:</strong> ${productDetail.price}</p>
//                           </>
//                         ) : (
//                           <p><strong>Product details not available</strong></p>
//                         )}
//                         <p><strong>Quantity:</strong> {product.quantity}</p>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </>
//   );
// };

// export default OrderPage;

// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './OrderPage.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from "./AdminNavbar";

// const OrderPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const adminId = searchParams.get('adminId');

//   const [orders, setOrders] = useState({ todaysOrders: [], pastOrders: [] });
//   const [customerDetails, setCustomerDetails] = useState({});
//   const [productDetails, setProductDetails] = useState({});
//   const [view, setView] = useState('today'); // 'today' or 'past'

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getorders?adminId=${adminId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch orders');
//         }
//         const ordersData = await response.json();
//         const today = new Date();
//         const startOfDay = new Date(today.setHours(0, 0, 0, 0));
//         const endOfDay = new Date(today.setHours(23, 59, 59, 999));

//         const todaysOrders = ordersData.filter(order => {
//           const orderDate = new Date(order.orderDate);
//           return orderDate >= startOfDay && orderDate <= endOfDay;
//         });

//         const pastOrders = ordersData.filter(order => {
//           const orderDate = new Date(order.orderDate);
//           return orderDate < startOfDay || orderDate > endOfDay;
//         });

//         setOrders({ todaysOrders, pastOrders });
//         await fetchCustomerDetails(ordersData);
//         await fetchProductDetails(ordersData);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//         toast.error('Failed to fetch orders');
//       }
//     };

//     const fetchCustomerDetails = async (orders) => {
//       const customerIds = [...new Set(orders.map(order => order.customerId))]; // Get unique customer IDs
//       try {
//         const customerDetailsData = await Promise.all(customerIds.map(async customerId => {
//           const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getcustomer?customerId=${customerId}`);
//           if (!response.ok) {
//             throw new Error(`Failed to fetch customer details for ID: ${customerId}`);
//           }
//           return await response.json();
//         }));
//         const customerDetailsMap = customerDetailsData.reduce((acc, customer) => {
//           acc[customer._id] = customer;
//           return acc;
//         }, {});
//         setCustomerDetails(customerDetailsMap);
//       } catch (error) {
//         console.error('Error fetching customer details:', error);
//         toast.error('Failed to fetch customer details');
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

//     fetchOrders();
//   }, [adminId]);

//   const handleViewChange = (view) => {
//     setView(view);
//   };

//   const displayedOrders = view === 'today' ? orders.todaysOrders : orders.pastOrders;

//   return (
//     <>
//       <Navbar />
//       <div className="order-page">
//         <h1>Orders</h1>
//         <div className="view-buttons">
//           <button onClick={() => handleViewChange('today')}>Today's Orders</button>
//           <button onClick={() => handleViewChange('past')}>Past Orders</button>
//         </div>
//         <ToastContainer autoClose={2000} />
//         {displayedOrders.length === 0 ? (
//           <p className="no-orders-message">No orders found for this admin.</p>
//         ) : (
//           displayedOrders.map(order => {
//             const customer = customerDetails[order.customerId];
//             return (
//               <div key={order._id} className="order">
//                 <h2>Order ID: {order._id}</h2>
//                 {customer ? (
//                   <div className="customer-details">
//                     <p><strong>Customer Name:</strong> {customer.name}</p>
//                     <p><strong>Customer Email:</strong> {customer.email}</p>
//                     <p><strong>Customer Phone:</strong> {customer.contactNumber}</p>
//                   </div>
//                 ) : (
//                   <p>Loading customer details...</p>
//                 )}
//                 <p><strong>Total Price:</strong> ${order.totalPrice}</p>
//                 <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
//                 <h3>Products</h3>
//                 <div className="cart-products">
//                   {order.products.map(product => {
//                     const productDetail = productDetails[product.productId];
//                     return (
//                       <div key={product.productId} className="cart-product">
//                         {productDetail ? (
//                           <>
//                             <img src={productDetail.imageUrl} alt={productDetail.productName} />
//                             <p><strong>Product Name:</strong> {productDetail.productName}</p>
//                             <p><strong>Price:</strong> ${productDetail.price}</p>
//                           </>
//                         ) : (
//                           <p><strong>Product details not available</strong></p>
//                         )}
//                         <p><strong>Quantity:</strong> {product.quantity}</p>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </>
//   );
// };

// export default OrderPage;

// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './OrderPage.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from "./AdminNavbar";

// const OrderPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const adminId = searchParams.get('adminId');

//   const [orders, setOrders] = useState({ todaysOrders: [], pastOrders: [] });
//   const [customerDetails, setCustomerDetails] = useState({});
//   const [view, setView] = useState('today'); // 'today' or 'past'

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getorders?adminId=${adminId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch orders');
//         }
//         const ordersData = await response.json();
//         const today = new Date();
//         const startOfDay = new Date(today.setHours(0, 0, 0, 0));
//         const endOfDay = new Date(today.setHours(23, 59, 59, 999));

//         const todaysOrders = ordersData.filter(order => {
//           const orderDate = new Date(order.orderDate);
//           return orderDate >= startOfDay && orderDate <= endOfDay;
//         });

//         const pastOrders = ordersData.filter(order => {
//           const orderDate = new Date(order.orderDate);
//           return orderDate < startOfDay || orderDate > endOfDay;
//         });

//         setOrders({ todaysOrders, pastOrders });
//         await fetchCustomerDetails(ordersData);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//         toast.error('Failed to fetch orders');
//       }
//     };

//     const fetchCustomerDetails = async (orders) => {
//       const customerIds = [...new Set(orders.map(order => order.customerId))]; // Get unique customer IDs
//       try {
//         const customerDetailsData = await Promise.all(customerIds.map(async customerId => {
//           const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getcustomer?customerId=${customerId}`);
//           if (!response.ok) {
//             throw new Error(`Failed to fetch customer details for ID: ${customerId}`);
//           }
//           return await response.json();
//         }));
//         const customerDetailsMap = customerDetailsData.reduce((acc, customer) => {
//           acc[customer._id] = customer;
//           return acc;
//         }, {});
//         setCustomerDetails(customerDetailsMap);
//       } catch (error) {
//         console.error('Error fetching customer details:', error);
//         toast.error('Failed to fetch customer details');
//       }
//     };

//     fetchOrders();
//   }, [adminId]);

//   const handleViewChange = (view) => {
//     setView(view);
//   };

//   const displayedOrders = view === 'today' ? orders.todaysOrders : orders.pastOrders;

//   return (
//     <>
//       <Navbar />
//       <div className="order-page">
//         <h1>Orders</h1>
//         <div className="view-buttons">
//           <button onClick={() => handleViewChange('today')}>Today's Orders</button>
//           <button onClick={() => handleViewChange('past')}>Past Orders</button>
//         </div>
//         <ToastContainer autoClose={2000} />
//         {displayedOrders.length === 0 ? (
//           <p className="no-orders-message">No orders found for this admin.</p>
//         ) : (
//           displayedOrders.map(order => {
//             const customer = customerDetails[order.customerId];
//             return (
//               <div key={order._id} className="order">
//                 <h2>Order ID: {order._id}</h2>
//                 {customer ? (
//                   <div className="customer-details">
//                     <p><strong>Customer Name:</strong> {customer.name}</p>
//                     <p><strong>Customer Email:</strong> {customer.email}</p>
//                     <p><strong>Customer Phone:</strong> {customer.contactNumber}</p>
//                   </div>
//                 ) : (
//                   <p>Loading customer details...</p>
//                 )}
//                 <p><strong>Total Price:</strong> ${order.totalPrice}</p>
//                 <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
//                 <h3>Products</h3>
//                 <div className="cart-products">
//                   {order.products.map(product => (
//                     <div key={product.productId} className="cart-product">
//                       <img src={product.imageUrl} alt={product.productName} />
//                       <p><strong>Product Name:</strong> {product.productName}</p>
//                       <p><strong>Price:</strong> ${product.price}</p>
//                       <p><strong>Quantity:</strong> {product.quantity}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </>
//   );
// };

// export default OrderPage;

// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './OrderPage.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from "./AdminNavbar";

// const OrderPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const adminId = searchParams.get('adminId');

//   const [orders, setOrders] = useState({ todaysOrders: [], pastOrders: [] });
//   const [customerDetails, setCustomerDetails] = useState({});
//   const [view, setView] = useState('today'); // 'today' or 'past'

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getorders?adminId=${adminId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch orders');
//         }
//         const ordersData = await response.json();
//         const today = new Date();
//         const startOfDay = new Date(today.setHours(0, 0, 0, 0));
//         const endOfDay = new Date(today.setHours(23, 59, 59, 999));

//         const todaysOrders = ordersData.filter(order => {
//           const orderDate = new Date(order.orderDate);
//           return orderDate >= startOfDay && orderDate <= endOfDay;
//         });

//         const pastOrders = ordersData.filter(order => {
//           const orderDate = new Date(order.orderDate);
//           return orderDate < startOfDay || orderDate > endOfDay;
//         });

//         setOrders({ todaysOrders, pastOrders });
//         await fetchCustomerDetails(ordersData);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//         toast.error('Failed to fetch orders');
//       }
//     };

//     const fetchCustomerDetails = async (orders) => {
//       const customerIds = [...new Set(orders.map(order => order.customerId))]; // Get unique customer IDs
//       try {
//         const customerDetailsData = await Promise.all(customerIds.map(async customerId => {
//           const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getcustomer?customerId=${customerId}`);
//           if (!response.ok) {
//             throw new Error(`Failed to fetch customer details for ID: ${customerId}`);
//           }
//           return await response.json();
//         }));
//         const customerDetailsMap = customerDetailsData.reduce((acc, customer) => {
//           acc[customer._id] = customer;
//           return acc;
//         }, {});
//         setCustomerDetails(customerDetailsMap);
//       } catch (error) {
//         console.error('Error fetching customer details:', error);
//         toast.error('Failed to fetch customer details');
//       }
//     };

//     fetchOrders();
//   }, [adminId]);

//   const handleViewChange = (view) => {
//     setView(view);
//   };

//   const handleOrderAction = async (orderId, action, customerId) => {
//     try {
//       const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/update-order-status', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           userId: customerId,
//           sellerId: adminId,
//           orderId: orderId,
//           action: action
//         })
//       });

//       const data = await response.json();
//       if (response.ok) {
//         toast.success(`Mail sent successfully`);
//         setOrders((prevOrders) => {
//           const updatedOrders = {
//             todaysOrders: prevOrders.todaysOrders.map(order => 
//               order._id === orderId ? { ...order, status: action === 'accept' ? 'Accepted' : 'Declined' } : order
//             ),
//             pastOrders: prevOrders.pastOrders.map(order => 
//               order._id === orderId ? { ...order, status: action === 'accept' ? 'Accepted' : 'Declined' } : order
//             )
//           };
//           return updatedOrders;
//         });
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error('Error handling order action:', error);
//       toast.error('Failed to update order status');
//     }
//   };

//   const displayedOrders = view === 'today' ? orders.todaysOrders : orders.pastOrders;

//   return (
//     <>
//       <Navbar />
//       <div className="order-page">
//         <h1>Orders</h1>
//         <div className="view-buttons">
//           <button onClick={() => handleViewChange('today')}>Today's Orders</button>
//           <button onClick={() => handleViewChange('past')}>Past Orders</button>
//         </div>
//         <ToastContainer autoClose={2000} />
//         {displayedOrders.length === 0 ? (
//           <p className="no-orders-message">No orders found for this admin.</p>
//         ) : (
//           displayedOrders.map(order => {
//             const customer = customerDetails[order.customerId];
//             return (
//               <div key={order._id} className="order">
//                 <h2>Order ID: {order._id}</h2>
//                 {customer ? (
//                   <div className="customer-details">
//                     <p><strong>Customer Name:</strong> {customer.name}</p>
//                     <p><strong>Customer Email:</strong> {customer.email}</p>
//                     <p><strong>Customer Phone:</strong> {customer.contactNumber}</p>
//                   </div>
//                 ) : (
//                   <p>Loading customer details...</p>
//                 )}
//                 <p><strong>Total Price:</strong> ${order.totalPrice}</p>
//                 <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
//                 <h3>Products</h3>
//                 <div className="cart-products">
//                   {order.products.map(product => (
//                     <div key={product.productId} className="cart-product">
//                       <img src={product.imageUrl} alt={product.productName} />
//                       <p><strong>Product Name:</strong> {product.productName}</p>
//                       <p><strong>Price:</strong> ${product.price}</p>
//                       <p><strong>Quantity:</strong> {product.quantity}</p>
//                       <div className="order-actions">
//                 <button className="accept" onClick={() => handleOrderAction(order._id, 'accept', order.customerId)}>Accept</button>
//                 <button className="decline" onClick={() => handleOrderAction(order._id, 'decline', order.customerId)}>Decline</button>
//                 </div>
//                     </div>
//                   ))}
//                 </div>
//                 {/* <div className="order-actions">
//                   <button onClick={() => handleOrderAction(order._id, 'accept', order.customerId)}>Accept</button>
//                   <button onClick={() => handleOrderAction(order._id, 'decline', order.customerId)}>Decline</button>
//                 </div> */}
                
//               </div>
//             );
//           })
//         )}
//       </div>
//     </>
//   );
// };

// export default OrderPage;

// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './OrderPage.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from "./AdminNavbar";

// const OrderPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const adminId = searchParams.get('adminId');

//   const [orders, setOrders] = useState({ todaysOrders: [], pastOrders: [] });
//   const [customerDetails, setCustomerDetails] = useState({});
//   const [view, setView] = useState('today'); // 'today' or 'past'

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getorders?adminId=${adminId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch orders');
//         }
//         const ordersData = await response.json();
//         const today = new Date();
//         const startOfDay = new Date(today.setHours(0, 0, 0, 0));
//         const endOfDay = new Date(today.setHours(23, 59, 59, 999));

//         const todaysOrders = ordersData.filter(order => {
//           const orderDate = new Date(order.orderDate);
//           return orderDate >= startOfDay && orderDate <= endOfDay;
//         });

//         const pastOrders = ordersData.filter(order => {
//           const orderDate = new Date(order.orderDate);
//           return orderDate < startOfDay || orderDate > endOfDay;
//         });

//         setOrders({ todaysOrders, pastOrders });
//         await fetchCustomerDetails(ordersData);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//         toast.error('Failed to fetch orders');
//       }
//     };

//     const fetchCustomerDetails = async (orders) => {
//       const customerIds = [...new Set(orders.map(order => order.customerId))]; // Get unique customer IDs
//       try {
//         const customerDetailsData = await Promise.all(customerIds.map(async customerId => {
//           const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getcustomer?customerId=${customerId}`);
//           if (!response.ok) {
//             throw new Error(`Failed to fetch customer details for ID: ${customerId}`);
//           }
//           return await response.json();
//         }));
//         const customerDetailsMap = customerDetailsData.reduce((acc, customer) => {
//           acc[customer._id] = customer;
//           return acc;
//         }, {});
//         setCustomerDetails(customerDetailsMap);
//       } catch (error) {
//         console.error('Error fetching customer details:', error);
//         toast.error('Failed to fetch customer details');
//       }
//     };

//     fetchOrders();
//   }, [adminId]);

//   const handleViewChange = (view) => {
//     setView(view);
//   };

//   const handleOrderAction = async (orderId, action, customerId) => {
//     try {
//       const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/update-order-status', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           userId: customerId,
//           sellerId: adminId,
//           orderId: orderId,
//           action: action
//         })
//       });

//       const data = await response.json();
//       if (response.ok) {
//         toast.success(`Mail sent successfully`);
//         setOrders((prevOrders) => {
//           const updatedOrders = {
//             todaysOrders: prevOrders.todaysOrders.map(order => 
//               order._id === orderId ? { ...order, status: action === 'accept' ? 'Accepted' : 'Declined' } : order
//             ),
//             pastOrders: prevOrders.pastOrders.map(order => 
//               order._id === orderId ? { ...order, status: action === 'accept' ? 'Accepted' : 'Declined' } : order
//             )
//           };
//           return updatedOrders;
//         });
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error('Error handling order action:', error);
//       toast.error('Failed to update order status');
//     }
//   };

//   const displayedOrders = view === 'today' ? orders.todaysOrders : orders.pastOrders;

//   return (
//     <>
//       <Navbar />
//       <div className="order-page">
//         <h1>Orders</h1>
//         <div className="view-buttons">
//           <button onClick={() => handleViewChange('today')}>Today's Orders</button>
//           <button onClick={() => handleViewChange('past')}>Past Orders</button>
//         </div>
//         <ToastContainer autoClose={2000} />
//         {displayedOrders.length === 0 ? (
//           <p className="no-orders-message">No orders found for this admin.</p>
//         ) : (
//           displayedOrders.map(order => {
//             const customer = customerDetails[order.customerId];
//             return (
//               <div key={order._id} className="order">
//                 <h2>Order ID: {order._id}</h2>
//                 {customer ? (
//                   <div className="customer-details">
//                     <p><strong>Customer Name:</strong> {customer.name}</p>
//                     <p><strong>Customer Email:</strong> {customer.email}</p>
//                     <p><strong>Customer Phone:</strong> {customer.contactNumber}</p>
//                   </div>
//                 ) : (
//                   <p>Loading customer details...</p>
//                 )}
//                 <p><strong>Total Price:</strong> ${order.totalPrice}</p>
//                 <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
//                 <h3>Products</h3>
//                 <div className="cart-products">
//                   {order.products.map(product => (
//                     <div key={product.productId} className="cart-product">
//                       <img src={product.imageUrl} alt={product.productName} />
//                       <p><strong>Product Name:</strong> {product.productName}</p>
//                       <p><strong>Price:</strong> ${product.price}</p>
//                       <p><strong>Quantity:</strong> {product.quantity}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="order-actions">
//                   <button className="accept" onClick={() => handleOrderAction(order._id, 'accept', order.customerId)}>Accept</button>
//                   <button className="decline" onClick={() => handleOrderAction(order._id, 'decline', order.customerId)}>Decline</button>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </>
//   );
// };

// export default OrderPage;

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './OrderPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./AdminNavbar";

const OrderPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const adminId = searchParams.get('adminId');

  const [orders, setOrders] = useState({ todaysOrders: [], pastOrders: [] });
  const [customerDetails, setCustomerDetails] = useState({});
  const [view, setView] = useState('today'); 

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getorders?adminId=${adminId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const ordersData = await response.json();
        const today = new Date();
        const startOfDay = new Date(today.setHours(0, 0, 0, 0));
        const endOfDay = new Date(today.setHours(23, 59, 59, 999));

        const todaysOrders = ordersData.filter(order => {
          const orderDate = new Date(order.orderDate);
          return orderDate >= startOfDay && orderDate <= endOfDay;
        });

        const pastOrders = ordersData.filter(order => {
          const orderDate = new Date(order.orderDate);
          return orderDate < startOfDay || orderDate > endOfDay;
        });

        setOrders({ todaysOrders, pastOrders });
        await fetchCustomerDetails(ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error('Failed to fetch orders');
      }
    };

    const fetchCustomerDetails = async (orders) => {
      const customerIds = [...new Set(orders.map(order => order.customerId))]; // Get unique customer IDs
      try {
        const customerDetailsData = await Promise.all(customerIds.map(async customerId => {
          const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/getcustomer?customerId=${customerId}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch customer details for ID: ${customerId}`);
          }
          return await response.json();
        }));
        const customerDetailsMap = customerDetailsData.reduce((acc, customer) => {
          acc[customer._id] = customer;
          return acc;
        }, {});
        setCustomerDetails(customerDetailsMap);
      } catch (error) {
        console.error('Error fetching customer details:', error);
        toast.error('Failed to fetch customer details');
      }
    };

    fetchOrders();
  }, [adminId]);

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleOrderAction = async (orderId, action, customerId) => {
    try {
      const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/update-order-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: customerId,
          sellerId: adminId,
          orderId: orderId,
          action: action
        })
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(`Mail sent successfully`);
        setOrders((prevOrders) => {
          const updatedOrders = {
            todaysOrders: prevOrders.todaysOrders.map(order => 
              order._id === orderId ? { ...order, status: action === 'accept' ? 'Accepted' : 'Declined' } : order
            ),
            pastOrders: prevOrders.pastOrders.map(order => 
              order._id === orderId ? { ...order, status: action === 'accept' ? 'Accepted' : 'Declined' } : order
            )
          };
          return updatedOrders;
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error handling order action:', error);
      toast.error('Failed to update order status');
    }
  };

  const renderOrderActions = (order) => {
    if (view === 'today') {
      return (
        <div className="order-actions">
          <button className="accept" onClick={() => handleOrderAction(order._id, 'accept', order.customerId)}>Accept</button>
          <button className="decline" onClick={() => handleOrderAction(order._id, 'decline', order.customerId)}>Decline</button>
        </div>
      );
    }
    return null; // Don't render any actions for past orders
  };

  const displayedOrders = view === 'today' ? orders.todaysOrders : orders.pastOrders;

  return (
    <>
      <Navbar />
      <div className="order-page">
        <h1>Orders</h1>
        <div className="view-buttons">
          <button onClick={() => handleViewChange('today')}>Today's Orders</button>
          <button onClick={() => handleViewChange('past')}>Past Orders</button>
        </div>
        <ToastContainer autoClose={2000} />
        {displayedOrders.length === 0 ? (
          <p className="no-orders-message">No orders found for this admin.</p>
        ) : (
          displayedOrders.map(order => {
            const customer = customerDetails[order.customerId];
            return (
              <div key={order._id} className="order">
                <h2>Order ID: {order._id}</h2>
                {customer ? (
                  <div className="customer-details">
                    <p><strong>Customer Name:</strong> {customer.name}</p>
                    <p><strong>Customer Email:</strong> {customer.email}</p>
                    <p><strong>Customer Phone:</strong> {customer.contactNumber}</p>
                  </div>
                ) : (
                  <p>Loading customer details...</p>
                )}
                <p><strong>Total Price:</strong> Rs. {order.totalPrice}</p>
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
                {renderOrderActions(order)}
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default OrderPage;
