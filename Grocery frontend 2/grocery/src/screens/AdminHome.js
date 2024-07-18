// // import React, { useEffect, useState } from "react";
// // import Navbar from "./AdminNavbar";
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import { Link, useLocation } from "react-router-dom";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import './AdminHome.css'

// // const AdminHome = () => {
// //   const location = useLocation();
// //   const searchParams = new URLSearchParams(location.search);
// //   const adminId = searchParams.get('adminId');

// //   const [adminName, setAdminName] = useState('');
// //   const [products, setProducts] = useState([]);
// //   const [filteredProducts, setFilteredProducts] = useState([]);

// //   // Fetch admin details
// //   useEffect(() => {
// //     if (adminId) {
// //       fetchAdminDetails(adminId);
// //     }
// //   }, [adminId]);

// //   const fetchAdminDetails = async (adminId) => {
// //     try {
// //       const response = await fetch(
// //         `https://grocery-management-system-backend-7.onrender.com/api/admin?adminId=${adminId}`
// //       );
// //       if (response.ok) {
// //         const data = await response.json();
// //         setAdminName(data.admin.name.charAt(0).toUpperCase() + data.admin.name.slice(1)); // Capitalize first letter
// //       } else {
// //         console.error("Failed to fetch admin details");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching admin details:", error);
// //     }
// //   };

// //   // Fetch products from backend
// //   useEffect(() => {
// //     if (adminId) {
// //       fetchProducts(adminId);
// //     }
// //   }, [adminId]);

// //   const fetchProducts = async (adminId) => {
// //     try {
// //       const response = await fetch(
// //         `https://grocery-management-system-backend-7.onrender.com/api/products?adminId=${adminId}`
// //       );
// //       if (response.ok) {
// //         const data = await response.json();
// //         setProducts(data.products);
// //         setFilteredProducts(data.products); // Initialize filtered products with all products
// //       } else {
// //         console.error("Failed to fetch products");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching products:", error);
// //     }
// //   };

// //   // Function to handle deleting a product
// //   const handleDeleteProduct = async (productId) => {
// //     try {
// //       const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/deleteproduct/${productId}`, {
// //         method: 'DELETE',
// //       });
// //       if (response.ok) {
// //         // Remove the deleted product from the products state
// //         setProducts(products.filter(product => product._id !== productId));
// //         setFilteredProducts(filteredProducts.filter(product => product._id !== productId));
// //         toast.success('Product deleted successfully');
// //       } else {
// //         console.error("Failed to delete product");
// //         toast.error('Failed to delete product');
// //       }
// //     } catch (error) {
// //       console.error("Error deleting product:", error);
// //       toast.error('Error deleting product');
// //     }
// //   };

// //   // Function to handle search
// //   const handleSearch = async (searchQuery) => {
// //     try {
// //       const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/search?keyword=${searchQuery}&adminId=${adminId}`);
// //       if (!response.ok) {
// //         throw new Error("Failed to fetch products");
// //       }
// //       const data = await response.json();
// //       if (data.products.length === 0) {
// //         // If no products found, display a toast message
// //         toast.info('Product not found');
// //       } else {
// //         setFilteredProducts(data.products);
// //       }
// //     } catch (error) {
// //       console.error("Error occurred while searching products:", error);
// //       // Handle error
// //     }
// //   };

// //   // Function to group products by category
// //   const groupProductsByCategory = () => {
// //     const groupedProducts = {};
// //     filteredProducts.forEach(product => {
// //       if (!groupedProducts[product.category]) {
// //         groupedProducts[product.category] = [];
// //       }
// //       groupedProducts[product.category].push(product);
// //     });
// //     return groupedProducts;
// //   };

// //   // Carousel settings
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1
// //   };

// //   return (
// //     <>
// //       <div>
// //         <Navbar handleSearch={handleSearch} adminId={adminId} className="navbar" />
// //         <div className="admin-content">
// //           <h2>Welcome, {adminName}!</h2>
// //           <Slider {...settings}>
// //             <div>
// //               <img src="https://res.cloudinary.com/djxbzcayc/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1714749775/Add_a_heading_5_sss7i0.png" className="carousel-image" />
// //             </div>
// //             <div>
// //               <img src="https://res.cloudinary.com/djxbzcayc/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1714750307/Add_a_heading_6_b0stj7.png" className="carousel-image" />
// //             </div>
// //             <div>
// //               <img src="https://res.cloudinary.com/djxbzcayc/image/upload/v1714750724/Keep_Your_Inventory_Tidy_lxpblc.png" className="carousel-image" />
// //             </div>
// //           </Slider>

// //           {Object.entries(groupProductsByCategory()).map(([category, categoryProducts]) => (
// //             <div key={category}>
// //               <h3 style={{ marginTop: '20px' }}>{category}</h3>
// //               <div className="product-list">
// //                 {categoryProducts.map((product, index) => (
// //                   <div key={index} className="product-card">
// //                     <img src={product.imageUrl} alt={product.productName} />
// //                     <div className="product-details">
// //                       <h4>{product.productName}</h4>
// //                       <p>Price: ${product.price}</p>
// //                       <p>Quantity: {product.quantity}</p>
// //                       <p>{product.description}</p>
// //                       <p className="invisible">{product.category}</p>
// //                       <div className="buttons">
// //                         {/* <Link to={{ pathname: `/UpdateProduct/${product._id}` }}>
// //                           <button className="edit-btn">Edit</button>
// //                         </Link> */}
// //                         <button className="delete-btn" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       <ToastContainer />
// //     </>
// //   );
// // };

// // export default AdminHome;


// import React, { useEffect, useState } from "react";
// import Navbar from "./AdminNavbar";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useLocation } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './AdminHome.css'

// const AdminHome = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const adminId = searchParams.get('adminId');

//   const [adminName, setAdminName] = useState('');
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [editingProductId, setEditingProductId] = useState(null);
//   const [editForm, setEditForm] = useState({
//     productName: '',
//     price: '',
//     quantity: '',
//     description: '',
//     category: ''
//   });

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
//         setAdminName(data.admin.name.charAt(0).toUpperCase() + data.admin.name.slice(1));
//       } else {
//         console.error("Failed to fetch admin details");
//       }
//     } catch (error) {
//       console.error("Error fetching admin details:", error);
//     }
//   };

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
//         setFilteredProducts(data.products);
//       } else {
//         console.error("Failed to fetch products");
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const handleDeleteProduct = async (productId) => {
//     try {
//       const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/deleteproduct/${productId}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         setProducts(products.filter(product => product._id !== productId));
//         setFilteredProducts(filteredProducts.filter(product => product._id !== productId));
//         toast.success('Product deleted successfully');
//       } else {
//         console.error("Failed to delete product");
//         toast.error('Failed to delete product');
//       }
//     } catch (error) {
//       console.error("Error deleting product:", error);
//       toast.error('Error deleting product');
//     }
//   };

//   const handleSearch = async (searchQuery) => {
//     try {
//       const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/search?keyword=${searchQuery}&adminId=${adminId}`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch products");
//       }
//       const data = await response.json();
//       if (data.products.length === 0) {
//         toast.info('Product not found');
//       } else {
//         setFilteredProducts(data.products);
//       }
//     } catch (error) {
//       console.error("Error occurred while searching products:", error);
//     }
//   };

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

//   const handleEditProductClick = (product) => {
//     setEditingProductId(product._id);
//     setEditForm({
//       productName: product.productName,
//       price: product.price,
//       quantity: product.quantity,
//       description: product.description,
//       category: product.category
//     });
//   };

//   const handleEditFormChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm((prevForm) => ({ ...prevForm, [name]: value }));
//   };

//   const handleEditProduct = async (e) => {
//     e.preventDefault();
//     if (!editingProductId) return;

//     try {
//       const response = await fetch(
//         `https://grocery-management-system-backend-7.onrender.com/api/editproduct2/${editingProductId}`,
//         {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(editForm),
//         }
//       );
//       if (response.ok) {
//         const updatedProduct = await response.json();
//         setProducts(products.map(product => product._id === editingProductId ? updatedProduct.product : product));
//         setFilteredProducts(filteredProducts.map(product => product._id === editingProductId ? updatedProduct.product : product));
//         toast.success('Product updated successfully');
//         setEditingProductId(null);
//       } else {
//         console.error("Failed to update product");
//         toast.error('Failed to update product');
//       }
//     } catch (error) {
//       console.error("Error updating product:", error);
//       toast.error('Error updating product');
//     }
//   };

//   const handleCancelEdit = () => {
//     setEditingProductId(null);
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <>
//       <div>
//         <Navbar handleSearch={handleSearch} adminId={adminId} className="navbar" />
//         <div className="admin-content">
//           <h2>Welcome, {adminName}!</h2>
//           <Slider {...settings}>
//             <div>
//               <img src="https://res.cloudinary.com/djxbzcayc/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1714749775/Add_a_heading_5_sss7i0.png" className="carousel-image" />
//             </div>
//             <div>
//               <img src="https://res.cloudinary.com/djxbzcayc/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1714750307/Add_a_heading_6_b0stj7.png" className="carousel-image" />
//             </div>
//             <div>
//               <img src="https://res.cloudinary.com/djxbzcayc/image/upload/v1714750724/Keep_Your_Inventory_Tidy_lxpblc.png" className="carousel-image" />
//             </div>
//           </Slider>

//           {Object.entries(groupProductsByCategory()).map(([category, categoryProducts]) => (
//             <div key={category}>
//               <h3 style={{ marginTop: '20px' }}>{category}</h3>
//               <div className="product-list">
//                 {categoryProducts.map((product, index) => (
//                   <div key={index} className="product-card">
//                     {editingProductId === product._id ? (
//                       <form onSubmit={handleEditProduct} className="edit-form">
//                         <label>
//                           Product Name:
//                           <input type="text" name="productName" value={editForm.productName} onChange={handleEditFormChange} required />
//                         </label>
//                         <label>
//                           Price:
//                           <input type="number" name="price" value={editForm.price} onChange={handleEditFormChange} required />
//                         </label>
//                         <label>
//                           Quantity:
//                           <input type="text" name="quantity" value={editForm.quantity} onChange={handleEditFormChange} required />
//                         </label>
//                         <label>
//                           Description:
//                           <textarea name="description" value={editForm.description} onChange={handleEditFormChange} required />
//                         </label>
//                         <label>
//                           Category:
//                           <input type="text" name="category" value={editForm.category} onChange={handleEditFormChange} />
//                         </label>
//                         <div className="buttons">
//                           <button type="submit" className="save-btn">Save</button>
//                           <button type="button" className="cancel-btn" onClick={handleCancelEdit}>Cancel</button>
//                         </div>
//                       </form>
//                     ) : (
//                       <>
//                         <img src={product.imageUrl} alt={product.productName} />
//                         <div className="product-details">
//                           <h4>{product.productName}</h4>
//                           <p>Price: ${product.price}</p>
//                           <p>Quantity: {product.quantity}</p>
//                           <p>{product.description}</p>
//                           <p className="invisible">{product.category}</p>
//                           <div className="buttons">
//                             <button className="edit-btn" onClick={() => handleEditProductClick(product)}>Edit</button>
//                             <button className="delete-btn" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
//                           </div>
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//         <ToastContainer />
//       </div>
//     </>
//   );
// };

// export default AdminHome;

import React, { useEffect, useState } from "react";
import Navbar from "./AdminNavbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AdminHome.css'

const AdminHome = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const adminId = searchParams.get('adminId');

  const [adminName, setAdminName] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editForm, setEditForm] = useState({
    productName: '',
    price: '',
    quantity: '',
    description: '',
    category: ''
  });
  const [showEditModal, setShowEditModal] = useState(false);

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

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`https://grocery-management-system-backend-7.onrender.com/api/deleteproduct/${productId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setProducts(products.filter(product => product._id !== productId));
        setFilteredProducts(filteredProducts.filter(product => product._id !== productId));
        toast.success('Product deleted successfully');
      } else {
        console.error("Failed to delete product");
        toast.error('Failed to delete product');
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error('Error deleting product');
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

  const handleEditProductClick = (product) => {
    setEditingProduct(product);
    setEditForm({
      productName: product.productName,
      price: product.price,
      quantity: product.quantity,
      description: product.description,
      category: product.category
    });
    setShowEditModal(true);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();
    if (!editingProduct) return;

    try {
      const response = await fetch(
        `https://grocery-management-system-backend-7.onrender.com/api/editproduct2/${editingProduct._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editForm),
        }
      );
      if (response.ok) {
        const updatedProduct = await response.json();
        setProducts(products.map(product => product._id === editingProduct._id ? updatedProduct.product : product));
        setFilteredProducts(filteredProducts.map(product => product._id === editingProduct._id ? updatedProduct.product : product));
        toast.success('Product updated successfully');
        setEditingProduct(null);
        setShowEditModal(false);
      } else {
        console.error("Failed to update product");
        toast.error('Failed to update product');
      }
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error('Error updating product');
    }
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setShowEditModal(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div>
        <Navbar handleSearch={handleSearch} adminId={adminId} className="navbar" />
        <div className="admin-content">
          <h2>Welcome, {adminName}!</h2>
          <Slider {...settings}>
            <div>
              <img src="https://res.cloudinary.com/djxbzcayc/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1714749775/Add_a_heading_5_sss7i0.png" className="carousel-image" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/djxbzcayc/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1714750307/Add_a_heading_6_b0stj7.png" className="carousel-image" />
            </div>
            <div>
              <img src="https://res.cloudinary.com/djxbzcayc/image/upload/v1714750724/Keep_Your_Inventory_Tidy_lxpblc.png" className="carousel-image" />
            </div>
          </Slider>

          {Object.entries(groupProductsByCategory()).map(([category, categoryProducts]) => (
            <div key={category}>
              <h3 style={{ marginTop: '20px' }}>{category}</h3>
              <div className="product-list">
                {categoryProducts.map((product, index) => (
                  <div key={index} className="product-card">
                    <>
                      <img src={product.imageUrl} alt={product.productName} />
                      <div className="product-details">
                        <h4>{product.productName}</h4>
                        <p>Price: Rs. {product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>{product.description}</p>
                        <p className="invisible">{product.category}</p>
                        <div className="buttons">
                          <button className="edit-btn" onClick={() => handleEditProductClick(product)}>Edit</button>
                          <button className="delete-btn" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                        </div>
                      </div>
                    </>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <ToastContainer />
      </div>

      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCancelEdit}>&times;</span>
            <form onSubmit={handleEditProduct} className="edit-form">
              <label>
                Product Name:
                <input type="text" name="productName" value={editForm.productName} onChange={handleEditFormChange} required />
              </label>
              <label>
                Price:
                <input type="number" name="price" value={editForm.price} onChange={handleEditFormChange} required />
              </label>
              <label>
                Quantity:
                <input type="text" name="quantity" value={editForm.quantity} onChange={handleEditFormChange} required />
              </label>
              <label>
                Description:
                <textarea name="description" value={editForm.description} onChange={handleEditFormChange} required />
              </label>
              <label>
                Category:
                <input type="text" name="category" value={editForm.category} onChange={handleEditFormChange} />
              </label>
              <div className="buttons">
                <button type="submit" className="save-btn">Save</button>
                <button type="button" className="cancel-btn" onClick={handleCancelEdit}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHome;

















