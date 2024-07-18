// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import UserNavbar from "./UserNavbar";

// const Products = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const customerId = searchParams.get("customerId");
//   const adminId = searchParams.get("adminId");
//   console.log(customerId);
//   console.log(adminId)

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     if (adminId) {
//       fetchAdminProducts(adminId);
//     }
//   }, [adminId]);

//   const fetchAdminProducts = async (adminId) => {
//     try {
//       const response = await fetch(
//         `https://grocery-management-system-backend-7.onrender.com/api/products?adminId=${adminId}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setProducts(data);
//       } else {
//         console.error("Failed to fetch admin products");
//       }
//     } catch (error) {
//       console.error("Error fetching admin products:", error);
//     }
//   };

//   // Render products UI
//   const groupProductsByCategory = () => {
//     const groupedProducts = {};
//     products.forEach(product => {
//       if (!groupedProducts[product.category]) {
//         groupedProducts[product.category] = [];
//       }
//       groupedProducts[product.category].push(product);
//     });
//     return groupedProducts;
//   };

//   return (
//     <>
//       <div>
//         <UserNavbar/>
//         <div className="admin-content">
//           <h2>Welcome, {adminName}!</h2>

//           {Object.entries(groupProductsByCategory()).map(([category, categoryProducts]) => (
//             <div key={category}>
//               <h3 style={{ marginTop: '20px' }}>{category}</h3>
//               <div className="product-list">
//                 {categoryProducts.map((product, index) => (
//                   <div key={index} className="product-card">
//                     <img src={product.imageUrl} alt={product.productName} />
//                     <div className="product-details">
//                       <h4>{product.productName}</h4>
//                       <p>Price: ${product.price}</p>
//                       <p>Quantity: {product.quantity}</p>
//                       <p>{product.description}</p>
//                       <p className="invisible">{product.category}</p>
//                       <div className="buttons">
//                         <Link to={{ pathname: `/UpdateProduct/${product._id}` }}>
//                           <button className="edit-btn">Edit</button>
//                         </Link>
//                         <button className="delete-btn" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Products;

// import React, { useEffect, useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import UserNavbar from "./UserNavbar";
// // import { FaHeart, FaShoppingCart } from 'react-icons/fa';

// const Products = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const adminId = searchParams.get("adminId");

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     if (adminId) {
//       fetchAdminProducts(adminId);
//     }
//   }, [adminId]);

//   const fetchAdminProducts = async (adminId) => {
//     try {
//       const response = await fetch(
//         `https://grocery-management-system-backend-7.onrender.com/api/products?adminId=${adminId}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setProducts(data);
//       } else {
//         console.error("Failed to fetch admin products");
//       }
//     } catch (error) {
//       console.error("Error fetching admin products:", error);
//     }
//   };

//   // Render products UI
//   const groupProductsByCategory = () => {
//     const groupedProducts = {};
//     products.forEach(product => {
//       if (!groupedProducts[product.category]) {
//         groupedProducts[product.category] = [];
//       }
//       groupedProducts[product.category].push(product);
//     });
//     return groupedProducts;
//   };

//   return (
//     <>
//       <div>
//         <UserNavbar />
//         <div className="admin-content">
//           {Object.entries(groupProductsByCategory()).map(([category, categoryProducts]) => (
//             <div key={category}>
//               <h3 style={{ marginTop: '20px' }}>{category}</h3>
//               <div className="product-list">
//                 {categoryProducts.map((product, index) => (
//                   <div key={index} className="product-card">
//                     <img src={product.imageUrl} alt={product.productName} />
//                     <div className="product-details">
//                       <h4>{product.productName}</h4>
//                       <p>Price: ${product.price}</p>
//                       <p>Quantity: {product.quantity}</p>
//                       <p>{product.description}</p>
//                       <p className="invisible">{product.category}</p>
//                       {/* <div className="buttons">
//                         <button className="wishlist-btn" onClick={() => handleWishlistClick(product._id)}>
//                           <FaHeart className="wishlist-icon" />
//                         </button>
//                         <button className="cart-btn" onClick={() => handleAddToCart(product._id)}>
//                           <FaShoppingCart className="cart-icon" />
//                         </button>
//                       </div> */}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Products;

// import React, { useEffect, useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import UserNavbar from "./UserNavbar";

// const Products = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const adminId = searchParams.get("adminId");
//   console.log(adminId);

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     if (adminId) {
//       fetchAdminProducts(adminId);
//     }
//   }, [adminId]);

//   const fetchAdminProducts = async (adminId) => {
//     try {
//       const response = await fetch(
//         `https://grocery-management-system-backend-7.onrender.com/api/products?adminId=${adminId}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setProducts(data);
//       } else {
//         console.error("Failed to fetch admin products");
//       }
//     } catch (error) {
//       console.error("Error fetching admin products:", error);
//     }
//   };
//   console.log(products);

//   // Render products UI
//   const groupProductsByCategory = () => {
//     const groupedProducts = {};

//     // Check if products is an array before calling forEach
//     if (Array.isArray(products)) {
//       products.forEach(product => {
//         if (!groupedProducts[products.category]) {
//           groupedProducts[products.category] = [];
//         }
//         groupedProducts[products.category].push(products);
//       });
//     }
//     console.log(groupedProducts);
//     return groupedProducts;
//   };
 

//   return (
//     <>
//       <div>
//         <UserNavbar />
//         <div className="admin-content">
//           {Object.entries(groupProductsByCategory()).map(([category, categoryProducts]) => (
//             <div key={category}>
//               <h3 style={{ marginTop: '20px' }}>{category}</h3>
//               <div className="product-list">
//                 {categoryProducts.map((product, index) => (
//                   <div key={index} className="product-card">
//                     <img src={product.imageUrl} alt={product.productName} />
//                     <div className="product-details">
//                       <h4>{product.productName}</h4>
//                       <p>Price: ${product.price}</p>
//                       <p>Quantity: {product.quantity}</p>
//                       <p>{product.description}</p>
//                       <p className="invisible">{product.category}</p>
//                       {/* <div className="buttons">
//                         <button className="wishlist-btn" onClick={() => handleWishlistClick(product._id)}>
//                           <FaHeart className="wishlist-icon" />
//                         </button>
//                         <button className="cart-btn" onClick={() => handleAddToCart(product._id)}>
//                           <FaShoppingCart className="cart-icon" />
//                         </button>
//                       </div> */}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Products;

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import UserNavbar from "./UserNavbar";

// const Products = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const adminId = searchParams.get("adminId");
//   console.log(adminId);
//   const [products, setProducts] = useState([]);


//   useEffect(() => {
//     if (adminId) {
//       fetchAdminProducts(adminId);
//     }
//   }, [adminId]);

//   const fetchAdminProducts = async (adminId) => {
//     try {
//       const response = await fetch(
//         `https://grocery-management-system-backend-7.onrender.com/api/products?adminId=${adminId}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setProducts(data);
//       } else {
//         console.error("Failed to fetch admin products");
//       }
//     } catch (error) {
//       console.error("Error fetching admin products:", error);
//     }
//   };
//   console.log(products);

//   return (
//     <>
//       {/* <div>
//         <UserNavbar />
//         <div className="admin-content">
//           {products.map((product, index) => (
//             <div key={index} className="product-card">
//               <img src={product.imageUrl} alt={product.productName} />
//               <div className="product-details">
//                 <h4>{product.productName}</h4>
//                 <p>Price: ${product.price}</p>
//                 <p>Quantity: {product.quantity}</p>
//                 <p>{product.description}</p>
//                 <p className="invisible">{product.category}</p>
//                 <div className="buttons">
//                   <button className="wishlist-btn" onClick={() => handleWishlistClick(product._id)}>
//                     <FaHeart className="wishlist-icon" />
//                   </button>
//                   <button className="cart-btn" onClick={() => handleAddToCart(product._id)}>
//                     <FaShoppingCart className="cart-icon" />
//                   </button>
//                 </div> 
//               </div>
//             </div>
//           ))}
//         </div>
//       </div> */}
//       {Array.isArray(products) && products.map((product, index) => (
//   <div key={index} className="product-card">
//     <img src={product.imageUrl} alt={product.productName} />
//     <div className="product-details">
//       <h4>{product.productName}</h4>
//       <p>Price: ${product.price}</p>
//       <p>Quantity: {product.quantity}</p>
//       <p>{product.description}</p>
//       <p className="invisible">{product.category}</p>
//       {/* <div className="buttons">
//         <button className="wishlist-btn" onClick={() => handleWishlistClick(product._id)}>
//           <FaHeart className="wishlist-icon" />
//         </button>
//         <button className="cart-btn" onClick={() => handleAddToCart(product._id)}>
//           <FaShoppingCart className="cart-icon" />
//         </button>
//       </div> */}
//     </div>
//   </div>
// ))}

//     </>
//   );
// };

// export default Products;


// import React, { useEffect, useState } from "react";
// import UserNavbar from "./UserNavbar";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link, useLocation } from "react-router-dom";
// import { FaShoppingCart, FaHeart } from 'react-icons/fa';



// const Product = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const adminId = searchParams.get('adminId');

//   const [adminName, setAdminName] = useState('');
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   // Fetch admin details
//   useEffect(() => {
//     if (adminId) {
//       fetchAdminDetails(adminId);
//     }
//   }, [adminId]);

//   const fetchAdminDetails = async (adminId) => {
//     try {
//       const response = await fetch(
//         `https://grocery-management-system-backend-7.onrender.com/api/admin?adminId=${adminId}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setAdminName(data.admin.name.charAt(0).toUpperCase() + data.admin.name.slice(1)); // Capitalize first letter
//       } else {
//         console.error("Failed to fetch admin details");
//       }
//     } catch (error) {
//       console.error("Error fetching admin details:", error);
//     }
//   };

//   // Fetch products from backend
//   useEffect(() => {
//     if (adminId) {
//       fetchProducts(adminId);
//     }
//   }, [adminId]);

//   const fetchProducts = async (adminId) => {
//     try {
//       const response = await fetch(
//         `https://grocery-management-system-backend-7.onrender.com/api/products?adminId=${adminId}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setProducts(data.products);
//         setFilteredProducts(data.products); // Initialize filtered products with all products
//       } else {
//         console.error("Failed to fetch products");
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

 


//   // Function to handle search
//   const handleSearch = async (searchQuery) => {
//     try {
//       const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/search?keyword=${searchQuery}&adminId=${adminId}`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch products");
//       }
//       const data = await response.json();
//       if (data.products.length === 0) {
//         // If no products found, display a toast message
//         toast.info('Product not found');
//       } else {
//         setFilteredProducts(data.products);
//       }
//     } catch (error) {
//       console.error("Error occurred while searching products:", error);
//       // Handle error
//     }
//   };

//   // Function to group products by category
//   const groupProductsByCategory = () => {
//     const groupedProducts = {};
//     filteredProducts.forEach(product => {
//       if (!groupedProducts[product.category]) {
//         groupedProducts[product.category] = [];
//       }
//       groupedProducts[product.category].push(product);
//     });
//     return groupedProducts;
//   };


//   return (
//     <>
//       <div>
//         <UserNavbar handleSearch={handleSearch} className="navbar" />
//         <div className="admin-content">
//           <br/><br/>
//           {Object.entries(groupProductsByCategory()).map(([category, categoryProducts]) => (
//             <div key={category}>
//               <h3 style={{ marginTop: '20px' }}>{category}</h3>
//               <div className="product-list">
//                 {categoryProducts.map((product, index) => (
//                   <div key={index} className="product-card">
//                     <img src={product.imageUrl} alt={product.productName} />
//                     <div className="product-details">
//                       <h4>{product.productName}</h4>
//                       <p>Price: ${product.price}</p>
//                       <p>Quantity: {product.quantity}</p>
//                       <p>{product.description}</p>
//                       <p className="invisible">{product.category}</p>
//                       <div className="buttons1">
//                      <button className="wishlist-btn">
//                      <FaHeart className="wishlist-icon" /> Wishlist
//                      </button>
//                     <button className="cart-btn">
//                    <FaShoppingCart className="cart-icon" /> Add to Cart
//                    </button>
//                    </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Product;

// import React, { useEffect, useState } from "react";
// import UserNavbar from "./UserNavbar";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useLocation } from "react-router-dom";
// import { FaShoppingCart, FaHeart } from 'react-icons/fa';
// import './Products.css'

// const Product = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const adminId = searchParams.get('adminId');
//   const customerId = searchParams.get('customerId');
  

//   const [adminName, setAdminName] = useState('');
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   // Fetch admin details
//   useEffect(() => {
//     if (adminId) {
//       fetchAdminDetails(adminId);
//     }
//   }, [adminId]);

//   const fetchAdminDetails = async (adminId) => {
//     try {
//       const response = await fetch(
//         `https://grocery-management-system-backend-7.onrender.com/api/admin?adminId=${adminId}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setAdminName(data.admin.name.charAt(0).toUpperCase() + data.admin.name.slice(1)); // Capitalize first letter
//       } else {
//         console.error("Failed to fetch admin details");
//       }
//     } catch (error) {
//       console.error("Error fetching admin details:", error);
//     }
//   };

//   // Fetch products from backend
//   useEffect(() => {
//     if (adminId) {
//       fetchProducts(adminId);
//     }
//   }, [adminId]);

//   const fetchProducts = async (adminId) => {
//     try {
//       const response = await fetch(
//         `https://grocery-management-system-backend-7.onrender.com/api/products?adminId=${adminId}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setProducts(data.products);
//         setFilteredProducts(data.products); // Initialize filtered products with all products
//       } else {
//         console.error("Failed to fetch products");
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   // Function to handle search
//   const handleSearch = async (searchQuery) => {
//     try {
//       const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/search?keyword=${searchQuery}&adminId=${adminId}`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch products");
//       }
//       const data = await response.json();
//       if (data.products.length === 0) {
//         // If no products found, display a toast message
//         toast.info('Product not found');
//       } else {
//         setFilteredProducts(data.products);
//       }
//     } catch (error) {
//       console.error("Error occurred while searching products:", error);
//       // Handle error
//     }
//   };

//   // Function to group products by category
//   const groupProductsByCategory = () => {
//     const groupedProducts = {};
//     filteredProducts.forEach(product => {
//       if (!groupedProducts[product.category]) {
//         groupedProducts[product.category] = [];
//       }
//       groupedProducts[product.category].push(product);
//     });
//     return groupedProducts;
//   };

  
//   console.log(customerId)

//   // Function to add product to wishlist
//   const addToWishlist = async (productId,adminId) => {
//     console.log("aid" + adminId);
//     try {
//       const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/addToWishlist`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
        
//         body: JSON.stringify({ productId, customerId, adminId}), // Use customerId here
//       });
//       if (response.ok) {
//         toast.success('Product added to wishlist!');
//       } else {
//         throw new Error('Failed to add product to wishlist');
//       }
//     } catch (error) {
//       console.error('Error adding product to wishlist:', error);
//       toast.error('Product already exists in wishlist');
//     }
//   };

//   const addToCart = async (productId,adminId) => {
//     console.log("pid" + productId);
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

//   return (
//     <>
//       <div>
//         <UserNavbar handleSearch={handleSearch} className="navbar" />
//         <div className="admin-content">
//           <br/><br/>
//           {Object.entries(groupProductsByCategory()).map(([category, categoryProducts]) => (
//             <div key={category}>
//               <h3 style={{ marginTop: '20px' }}>{category}</h3>
//               <div className="product-list">
//                 {categoryProducts.map((product, index) => (
//                   <div key={index} className="product-card">
//                     <img src={product.imageUrl} alt={product.productName} />
//                     <div className="product-details">
//                       <h4>{product.productName}</h4>
//                       <p>Price: ${product.price}</p>
//                       <p>Quantity: {product.quantity}</p>
//                       <p>{product.description}</p>
//                       <p className="invisible">{product.category}</p>
//                       <div className="buttons1">
//                         <button className="wishlist-btn" onClick={() => addToWishlist(product._id,product.adminId)}>
//                           <FaHeart className="wishlist-icon" /> Wishlist
//                         </button>
//                         <button className="cart-btn"  onClick={() => addToCart(product._id,product.adminId)}>
//                           <FaShoppingCart className="cart-icon"/> Add to Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Product;

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

  // Fetch admin details
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
        setAdminName(data.admin.name.charAt(0).toUpperCase() + data.admin.name.slice(1)); // Capitalize first letter
      } else {
        console.error("Failed to fetch admin details");
      }
    } catch (error) {
      console.error("Error fetching admin details:", error);
    }
  };

  // Fetch products from backend
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
        setFilteredProducts(data.products); // Initialize filtered products with all products
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Function to handle search
  const handleSearch = async (searchQuery) => {
    try {
      const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/search?keyword=${searchQuery}&adminId=${adminId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      if (data.products.length === 0) {
        // If no products found, display a toast message
        toast.info('Product not found');
      } else {
        setFilteredProducts(data.products);
      }
    } catch (error) {
      console.error("Error occurred while searching products:", error);
      // Handle error
    }
  };

  // Function to group products by category
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

  // Function to add product to wishlist
  const addToWishlist = async (productId, adminId) => {
    try {
      const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/addToWishlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, customerId, adminId }), // Use customerId here
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

  // Function to add product to cart
  const addToCart = async (productId, adminId) => {
    try {
      const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/addToCart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, customerId, adminId }), // Use customerId here
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
          {/* Check if there are any products available */}
          {filteredProducts.length === 0 ? (
            <p className="no-products-message">No products available.</p>
          ) : (
            // Render products if available
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





