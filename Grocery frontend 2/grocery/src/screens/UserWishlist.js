// import React, { useState, useEffect } from 'react';

// const WishlistPage = ({ customerId }) => {
//   const [wishlistProducts, setWishlistProducts] = useState([]);

//   useEffect(() => {
//     const fetchWishlistProducts = async () => {
//       try {
//         if (!customerId) return;
        
//         const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/wishlist?customerId=${customerId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch wishlist products');
//         }
//         const wishlistData = await response.json();
        
//         const productIds = wishlistData.map(product => product.productId);
//         const productPromises = productIds.map(productId =>
//           fetch(`https://grocery-management-system-backend-7.onrender.com/api/products/${productId}`).then(res => res.json())
//         );
//         const productResponses = await Promise.all(productPromises);
//         setWishlistProducts(productResponses);
//       } catch (error) {
//         console.error('Error fetching wishlist products:', error);
//       }
//     };

//     fetchWishlistProducts();
//   }, [customerId]);

//   return (
//     <div>
//       <h1>Wishlist</h1>
//       <div className="wishlist-container">
//         {wishlistProducts.map(product => (
//           <div key={product._id} className="wishlist-item">
//             <img src={product.imageUrl} alt={product.productName} />
//             <div>
//               <h3>{product.productName}</h3>
//               <p>Price: ${product.price}</p>
//               <button>Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WishlistPage;

// import React, { useState, useEffect} from 'react';
// import { useLocation } from 'react-router-dom';

// const WishlistPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const customerId = searchParams.get('customerId');

//   const [wishlistProducts, setWishlistProducts] = useState([]);
//   console.log(customerId);

//   useEffect(() => {
//     const fetchWishlistProducts = async () => {
//       try {
//         if (!customerId) return;

//         const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/wishlist?customerId=${customerId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch wishlist products');
//         }
//         const wishlistData = await response.json();
//         console.log(wishlistData);

//         // Extract product IDs from the wishlist data
//         const productIds = wishlistData.map(product => product.productId);

//         // Fetch products using product IDs
//         const productPromises = productIds.map(productId =>
//           fetch(`https://grocery-management-system-backend-7.onrender.com/api/products/${productId}`)
//             .then(res => {
//               if (!res.ok) {
//                 throw new Error('Failed to fetch product');
//               }
//               return res.json();
//             })
//         );

//         // Wait for all product fetch requests to resolve
//         const productResponses = await Promise.all(productPromises);
//         setWishlistProducts(productResponses);
//       } catch (error) {
//         console.error('Error fetching wishlist products:', error);
//       }
//     };

//     fetchWishlistProducts();
//   }, [customerId]);

//   return (
//     <div>
//       <h1>Wishlist</h1>
//       <div className="wishlist-container">
//         {wishlistProducts.map(product => (
//           <div key={product._id} className="wishlist-item">
//             <img src={product.imageUrl} alt={product.productName} />
//             <div>
//               <h3>{product.productName}</h3>
//               <p>Price: ${product.price}</p>
//               <button>Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WishlistPage;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const WishlistPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const customerId = searchParams.get('customerId');

//   const [wishlistProducts, setWishlistProducts] = useState([]);
  
//   useEffect(() => {
//     const fetchWishlistProducts = async () => {
//       try {
//         if (!customerId) return;

//         const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/wishlist?customerId=${customerId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch wishlist products');
//         }
//         const wishlistData = await response.json();
//         console.log(wishlistData);

//         const wishlistProducts = [];

//         for (let i = 0; i < wishlistData.length; i++) {
//           const productId = wishlistData[i]
//           const productResponse = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/products/${productId}`);
//           if (!productResponse.ok) {
//             throw new Error('Failed to fetch product');
//           }
//           const product = await productResponse.json();
//           wishlistProducts.push(product);
//         }

//         setWishlistProducts(wishlistProducts);
//       } catch (error) {
//         console.error('Error fetching wishlist products:', error);
//       }
//     };

//     fetchWishlistProducts();
//   }, [customerId]);

//   return (
//     <div>
//       <h1>Wishlist</h1>
//       <div className="wishlist-container">
//         {wishlistProducts.map(product => (
//           <div key={product._id} className="wishlist-item">
//             <img src={product.imageUrl} alt={product.productName} />
//             <div>
//               <h3>{product.productName}</h3>
//               <p>Price: ${product.price}</p>
//               <button>Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WishlistPage;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { FaShoppingCart, FaTrash } from 'react-icons/fa';
// import './Wishlist.css'
// import UserNavbar from "./UserNavbar";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const WishlistPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const customerId = searchParams.get('customerId');

//   const [wishlistProducts, setWishlistProducts] = useState([]);
  
//   useEffect(() => {
//     const fetchWishlistProducts = async () => {
//       try {
//         if (!customerId) return;

//         const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/wishlist?customerId=${customerId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch wishlist products');
//         }
//         const wishlistData = await response.json();
//         console.log(wishlistData);

//         const wishlistProducts = [];

//         for (let i = 0; i < wishlistData.length; i++) {
//           const productId = wishlistData[i]
//           const productResponse = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/products/${productId}`);
//           if (!productResponse.ok) {
//             throw new Error('Failed to fetch product');
//           }
//           const product = await productResponse.json();
//           wishlistProducts.push(product);
//         }

//         setWishlistProducts(wishlistProducts);
//       } catch (error) {
//         console.error('Error fetching wishlist products:', error);
//       }
//     };

//     fetchWishlistProducts();
//   }, [customerId]);

//   const removeFromWishlist = async (productId) => {
//     try {
//       const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/removewishlist/${customerId}/${productId}`, { method: 'DELETE' });
//       if (!response.ok) {
//         // throw new Error('Failed to remove product from wishlist');
//         toast.error("Failed to remove product from wishlist");
//       }
//       else{
//         toast.success("Product removed successfully!");
//         setWishlistProducts(wishlistProducts.filter(product => product._id !== productId));
//       }

//       // Update local state to reflect removal
      
//     } catch (error) {
//       console.error('Error removing product from wishlist:', error);
//     }
//   };


//   return (
//     <>
//     <UserNavbar/>
//     <ToastContainer autoClose={2000} />
//     <div>
//       <h1>Wishlist</h1>
//       <div className="wishlist-container">
//         {wishlistProducts.map(product => (
//           <div key={product._id} className="wishlist-item">
//             <img src={product.imageUrl} alt={product.productName} />
//             <div>
//               <h3>{product.productName}</h3>
//               <h6>Quantity: {product.quantity}</h6>
//               <h6>Price: ${product.price}</h6>
//               <h6>Description: {product.description}</h6>
//               {/* Admin ID (invisible) */}
//               <h6 className='invisible'>Admin ID: {product.adminId}</h6>
//               {/* Buttons */}
//               <div className='buttons'>
                 
//                 <button onClick={() => removeFromWishlist(product._id)} className='remove-btn'><FaTrash className="remove-icon" />
//                 Remove</button>
//                 <button className='add-to-cart-btn'><FaShoppingCart className="cart-icon" /> Add to Cart</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default WishlistPage;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { FaShoppingCart, FaTrash } from 'react-icons/fa';
// import './Wishlist.css'
// import UserNavbar from "./UserNavbar";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const WishlistPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const customerId = searchParams.get('customerId');

//   const [wishlistProducts, setWishlistProducts] = useState([]);

//   useEffect(() => {
//     const fetchWishlistProducts = async () => {
//       try {
//         if (!customerId) return;

//         const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/wishlist?customerId=${customerId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch wishlist products');
//         }
//         const wishlistData = await response.json();

//         // Fetch each product separately and update state as they load
//         const fetchProducts = async () => {
//           const products = [];
//           for (let i = 0; i < wishlistData.length; i++) {
//             const productId = wishlistData[i];
//             const productResponse = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/products/${productId}`);
//             if (!productResponse.ok) {
//               throw new Error('Failed to fetch product');
//             }
//             const product = await productResponse.json();
//             products.push(product);
//             setWishlistProducts((prevProducts) => [...prevProducts, product]);
//           }
//         };

//         fetchProducts();
//       } catch (error) {
//         console.error('Error fetching wishlist products:', error);
//       }
//     };

//     fetchWishlistProducts();
//   }, [customerId]);

//   const removeFromWishlist = async (productId) => {
//     try {
//       const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/removewishlist/${customerId}/${productId}`, { method: 'DELETE' });
//       if (!response.ok) {
//         toast.error("Failed to remove product from wishlist");
//       } else {
//         toast.success("Product removed successfully!");
//         setWishlistProducts(wishlistProducts.filter(product => product._id !== productId));
//       }
//     } catch (error) {
//       console.error('Error removing product from wishlist:', error);
//     }
//   };

//   return (
//     <>
//       <UserNavbar />
//       <ToastContainer autoClose={2000} />
//       <div>
//         <h1>Wishlist</h1>
//         <div className="wishlist-container">
//           {wishlistProducts.map(product => (
//             <div key={product._id} className="wishlist-item">
//               <img src={product.imageUrl} alt={product.productName} />
//               <div>
//                 <h3>{product.productName}</h3>
//                 <h6>Quantity: {product.quantity}</h6>
//                 <h6>Price: ${product.price}</h6>
//                 <h6>Description: {product.description}</h6>
//                 <div>
//                   <button onClick={() => removeFromWishlist(product._id)} className='remove-btn'><FaTrash className="remove-icon" /> Remove</button>
//                   <button className='add-to-cart-btn'><FaShoppingCart className="cart-icon" /> Add to Cart</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default WishlistPage;


// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { FaShoppingCart, FaTrash } from 'react-icons/fa';
// import './Wishlist.css'
// import UserNavbar from "./UserNavbar";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const WishlistPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const customerId = searchParams.get('customerId');

//   const [wishlistProducts, setWishlistProducts] = useState([]);

//   useEffect(() => {
//     const fetchWishlistProducts = async () => {
//       try {
//         if (!customerId) return;

//         const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/wishlist?customerId=${customerId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch wishlist products');
//         }
//         const wishlistData = await response.json();

//         // Fetch each product separately and update state as they load
//         const fetchProducts = async () => {
//           const products = [];
//           for (let i = 0; i < wishlistData.length; i++) {
//             const productId = wishlistData[i];
//             const productResponse = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/products/${productId}`);
//             if (!productResponse.ok) {
//               throw new Error('Failed to fetch product');
//             }
//             const product = await productResponse.json();
//             products.push(product);
//             setWishlistProducts((prevProducts) => [...prevProducts, product]);
//           }
//         };

//         fetchProducts();
//       } catch (error) {
//         console.error('Error fetching wishlist products:', error);
//       }
//     };

//     fetchWishlistProducts();
//   }, [customerId]);

//   const removeFromWishlist = async (productId) => {
//     try {
//       const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/removewishlist/${customerId}/${productId}`, { method: 'DELETE' });
//       if (!response.ok) {
//         toast.error("Failed to remove product from wishlist");
//       } else {
//         toast.success("Product removed successfully!");
//         setWishlistProducts(wishlistProducts.filter(product => product._id !== productId));
//       }
//     } catch (error) {
//       console.error('Error removing product from wishlist:', error);
//     }
//   };

//   // Group the products by category
//   const groupedProducts = wishlistProducts.reduce((acc, product) => {
//     const category = product.category;
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(product);
//     return acc;
//   }, {});

//   return (
//     <>
//       <UserNavbar />
//       <ToastContainer autoClose={2000} />
//       <div>
//         <h1>Wishlist</h1>
//         {Object.keys(groupedProducts).map(category => (
//           <div key={category}>
//             <h2>{category}</h2>
//             <div className="wishlist-container">
//               {groupedProducts[category].map(product => (
//                 <div key={product._id} className="wishlist-item">
//                   <img src={product.imageUrl} alt={product.productName} />
//                   <div>
//                     <h3>{product.productName}</h3>
//                     <h6>Quantity: {product.quantity}</h6>
//                     <h6>Price: ${product.price}</h6>
//                     <h6>Description: {product.description}</h6>
//                     <div>
//                       <button onClick={() => removeFromWishlist(product._id)} className='remove-btn'><FaTrash className="remove-icon" /> Remove</button>
//                       <button className='add-to-cart-btn'><FaShoppingCart className="cart-icon" /> Add to Cart</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default WishlistPage;


// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { FaShoppingCart, FaTrash } from 'react-icons/fa';
// import './Wishlist.css'
// import UserNavbar from "./UserNavbar";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const WishlistPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const customerId = searchParams.get('customerId');

//   const [wishlistProducts, setWishlistProducts] = useState([]);

//   useEffect(() => {
//     const fetchWishlistProducts = async () => {
//       try {
//         if (!customerId) return;

//         const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/wishlist?customerId=${customerId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch wishlist products');
//         }
//         const wishlistData = await response.json();

//         // Fetch each product separately and update state as they load
//         const fetchProducts = async () => {
//           const products = [];
//           for (let i = 0; i < wishlistData.length; i++) {
//             const productId = wishlistData[i];
//             const productResponse = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/products/${productId}`);
//             if (!productResponse.ok) {
//               throw new Error('Failed to fetch product');
//             }
//             const product = await productResponse.json();
//             products.push(product);
//             setWishlistProducts((prevProducts) => [...prevProducts, product]);
//           }
//         };

//         fetchProducts();
//       } catch (error) {
//         console.error('Error fetching wishlist products:', error);
//       }
//     };

//     fetchWishlistProducts();
//   }, [customerId]);

//   const removeFromWishlist = async (productId) => {
//     try {
//       const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/removewishlist/${customerId}/${productId}`, { method: 'DELETE' });
//       if (!response.ok) {
//         toast.error("Failed to remove product from wishlist");
//       } else {
//         toast.success("Product removed successfully!");
//         setWishlistProducts(wishlistProducts.filter(product => product._id !== productId));
//       }
//     } catch (error) {
//       console.error('Error removing product from wishlist:', error);
//     }
//   };

//   const addToCart = async (productId) => {
//     console.log("pid" + productId);
//     try {
//       const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/addToCart`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
        
//         body: JSON.stringify({ productId, customerId }), // Use customerId here
//       });
//       if (response.ok) {
//         toast.success('Product added to Cart!');
//       } else {
//         throw new Error('Failed to add product to Cart');
//       }
//     } catch (error) {
//       console.error('Error adding product to Cart:', error);
//       toast.error('Product already exists in Cart');
//     }
//   };

//   // Group the products by category
//   const groupedProducts = wishlistProducts.reduce((acc, product) => {
//     const category = product.category;
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(product);
//     return acc;
//   }, {});

//   return (
//     <>
//       <UserNavbar />
//       <ToastContainer autoClose={2000} />
//       <div>
//         <h1>Wishlist</h1>
//         {Object.keys(groupedProducts).map(category => (
//           <div key={category}>
//             <h2 className='category'>{category}</h2>
//             <div className="wishlist-container">
//               {groupedProducts[category].map(product => (
//                 <div key={product._id} className="wishlist-item">
//                   <img src={product.imageUrl} alt={product.productName} />
//                   <div className="wishlist-details">
//                     <h3>{product.productName}</h3>
//                     <p>Quantity: {product.quantity}</p>
//                     <p>Price: ${product.price}</p>
//                     <p>Description: {product.description}</p>
//                     <div className="buttons">
//                       <button onClick={() => removeFromWishlist(product._id)} className='remove-btn'><FaTrash className="remove-icon" /> Remove</button>
//                       <button className='add-to-cart-btn' onClick={() => addToCart(product._id)}><FaShoppingCart className="cart-icon" /> Add to Cart</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default WishlistPage;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { FaShoppingCart, FaTrash } from 'react-icons/fa';
// import './Wishlist.css'
// import UserNavbar from "./UserNavbar";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const WishlistPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const customerId = searchParams.get('customerId');

//   const [wishlistProducts, setWishlistProducts] = useState([]);

//   useEffect(() => {
//     const fetchWishlistProducts = async () => {
//       try {
//         if (!customerId) return;

//         const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/wishlist?customerId=${customerId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch wishlist products');
//         }
//         const wishlistData = await response.json();

//         // Fetch each product separately and update state as they load
//         const fetchProducts = async () => {
//           const products = [];
//           for (let i = 0; i < wishlistData.length; i++) {
//             const productId = wishlistData[i];
//             const productResponse = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/products/${productId}`);
//             if (!productResponse.ok) {
//               throw new Error('Failed to fetch product');
//             }
//             const product = await productResponse.json();
//             products.push(product);
//             setWishlistProducts((prevProducts) => [...prevProducts, product]);
//           }
//         };

//         fetchProducts();
//       } catch (error) {
//         console.error('Error fetching wishlist products:', error);
//       }
//     };

//     fetchWishlistProducts();
//   }, [customerId]);

//   const removeFromWishlist = async (productId) => {
//     try {
//       const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/removewishlist/${customerId}/${productId}`, { method: 'DELETE' });
//       if (!response.ok) {
//         toast.error("Failed to remove product from wishlist");
//       } else {
//         toast.success("Product removed successfully!");
//         setWishlistProducts(wishlistProducts.filter(product => product._id !== productId));
//       }
//     } catch (error) {
//       console.error('Error removing product from wishlist:', error);
//     }
//   };

//   const addToCart = async (productId,adminId) => {
//     console.log("pid" + productId);
//     console.log("admin" + adminId);
//     console.log("customer" + customerId);
//     try {
//       const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/addToCart`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
        
//         body: JSON.stringify({ productId, customerId, adminId }), // Use customerId here
//       });
//       if (response.ok) {
//         toast.success('Product added to Cart!');
//       } else {
//         throw new Error('Failed to add product to Cart');
//       }
//     } catch (error) {
//       console.error('Error adding product to Cart:', error);
//       toast.error('Product already exists in Cart');
//     }
//   };

//   // Group the products by category
//   const groupedProducts = wishlistProducts.reduce((acc, product) => {
//     const category = product.category;
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(product);
//     return acc;
//   }, {});

//   return (
//     <>
//       <UserNavbar />
//       <ToastContainer autoClose={2000} />
//       <div>
//         <h1>Wishlist</h1>
//         {Object.keys(groupedProducts).length === 0 ? (
//           <div className="empty-wishlist-message">
//             <h2>Your wishlist is empty</h2>
//             <p>Add some products to your wishlist now!</p>
//           </div>
//         ) : (
//           Object.keys(groupedProducts).map(category => (
//             <div key={category}>
//               <h2 className='category'>{category}</h2>
//               <div className="wishlist-container">
//                 {groupedProducts[category].map(product => (
//                   <div key={product._id} className="wishlist-item">
//                     <img src={product.imageUrl} alt={product.productName} />
//                     <div className="wishlist-details">
//                       <h3>{product.productName}</h3>
//                       <p>Quantity: {product.quantity}</p>
//                       <p>Price: ${product.price}</p>
//                       <p>Description: {product.description}</p>
//                       <div className="buttons">
//                         <button onClick={() => removeFromWishlist(product._id)} className='remove-btn'><FaTrash className="remove-icon" /> Remove</button>
//                         <button className='add-to-cart-btn' onClick={() => addToCart(product._id,product.adminId)}><FaShoppingCart className="cart-icon" /> Add to Cart</button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// };

// export default WishlistPage;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import './Wishlist.css';
import UserNavbar from "./UserNavbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WishlistPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const customerId = searchParams.get('customerId');

  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    const fetchWishlistProducts = async () => {
      try {
        if (!customerId) return;

        const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/wishlist?customerId=${customerId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch wishlist products');
        }
        const wishlistData = await response.json();

        const fetchProducts = async () => {
          const products = [];
          for (let i = 0; i < wishlistData.length; i++) {
            const productId = wishlistData[i];
            const productResponse = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/products/${productId}`);
            if (!productResponse.ok) {
              throw new Error('Failed to fetch product');
            }
            const product = await productResponse.json();
            products.push(product);
            setWishlistProducts((prevProducts) => [...prevProducts, product]);
          }
        };

        fetchProducts();
      } catch (error) {
        console.error('Error fetching wishlist products:', error);
      }
    };

    fetchWishlistProducts();
  }, [customerId]);

  const removeFromWishlist = async (productId) => {
    try {
      const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/removewishlist/${customerId}/${productId}`, { method: 'DELETE' });
      if (!response.ok) {
        toast.error("Failed to remove product from wishlist");
      } else {
        toast.success("Product removed successfully!");
        setWishlistProducts(wishlistProducts.filter(product => product._id !== productId));
      }
    } catch (error) {
      console.error('Error removing product from wishlist:', error);
    }
  };

  const addToCart = async (productId, adminId) => {
    console.log("productId:", productId);
    console.log("adminId:", adminId);
    console.log("customerId:", customerId);
    
    if (!productId || !adminId || !customerId) {
      toast.error('Invalid data. Please try again.');
      return;
    }

    try {
      const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/addToCart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, customerId, adminId }),
      });

      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        toast.success('Product added to Cart!');
      } else {
        console.error('Failed to add product to Cart:', data);
        throw new Error(data.message || 'Failed to add product to Cart');
      }
    } catch (error) {
      console.error('Error adding product to Cart:', error);
      toast.error('Product already exists in Cart');
    }
  };

  // Group the products by category
  const groupedProducts = wishlistProducts.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <>
      <UserNavbar />
      <ToastContainer autoClose={2000} />
      <div>
        <h1>Wishlist</h1>
        {Object.keys(groupedProducts).length === 0 ? (
          <div className="empty-wishlist-message">
            <h2>Your wishlist is empty</h2>
            <p>Add some products to your wishlist now!</p>
          </div>
        ) : (
          Object.keys(groupedProducts).map(category => (
            <div key={category}>
              <h2 className='category'>{category}</h2>
              <div className="wishlist-container">
                {groupedProducts[category].map(product => (
                  <div key={product._id} className="wishlist-item">
                    <img src={product.imageUrl} alt={product.productName} />
                    <div className="wishlist-details">
                      <h3>{product.productName}</h3>
                      <p>Quantity: {product.quantity}</p>
                      <p>Price: Rs. {product.price}</p>
                      <p>Description: {product.description}</p>
                      <div className="buttons">
                        <button onClick={() => removeFromWishlist(product._id)} className='remove-btn2'><FaTrash className="remove-icon" /> Remove</button>
                        <button className='add-to-cart-btn' onClick={() => addToCart(product._id, product.adminId)}><FaShoppingCart className="cart-icon" /> Add to Cart</button>
                      </div>
                    </div>
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

export default WishlistPage;

