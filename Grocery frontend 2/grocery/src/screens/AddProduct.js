// import React, { useState } from 'react';
// import {
//   styled,
//   Box,
//   Button,
//   InputBase,
//   FormControl,
//   MenuItem,
//   Select,
// } from '@mui/material';
// import { Add as AddIcon } from '@mui/icons-material';
// import { useNavigate, useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import TextareaAutosize from '@mui/material/TextareaAutosize'; // Import TextareaAutosize
// import Navbar from './AdminNavbar';

// const Container = styled(Box)(({ theme }) => ({
//   margin: '50px 100px',
//   [theme.breakpoints.down('md')]: {
//     margin: 0,
//   },
// }));

// const StyledFormControl = styled(FormControl)({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '10px',
// });

// const InputTextField = styled(InputBase)({
//   fontSize: '25px',
// });

// const AddProductButton = styled(Button)({
//   marginTop: '10px',
//   marginBottom: '10px',
// });

// const AddProduct = () => {
//   const navigate = useNavigate();
//   const {adminid} = useParams();
//   console.log("add " + adminid);
//   const [product, setProduct] = useState({
//     adminId : adminid,
//     productName: '',
//     prices: [{ price: '', quantity: '' }],
//     description: '',
//     category: '',
//     image: null,
//   });

//   const handleChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedPrices = [...product.prices];
//     updatedPrices[index][name] = value;
//     setProduct({ ...product, prices: updatedPrices });
//   };

//   const addPrice = () => {
//     setProduct({
//       ...product,
//       prices: [...product.prices, { price: '', quantity: '' }],
//     });
//   };

//   const handleImageChange = (e) => {
//     setProduct({ ...product, image: e.target.files[0] });
//   };

//   const saveProduct = async () => {
//     const formData = new FormData();
//     formData.append('productName', product.adminId);
//     formData.append('productName', product.productName);
//     formData.append('description', product.description);
//     formData.append('category', product.category);
//     formData.append('image', product.image);
//     formData.append('prices', JSON.stringify(product.prices));

//     try {
//       const response = await fetch(
//         'https://grocery-management-system-backend-7.onrender.com/api/upload',
//         {
//           method: 'POST',
//           body: formData,
//         }
//       );

//       if (response.ok) {
//         toast.success('Product added successfully!');
//         setProduct({
//           productName: '',
//           prices: [{ price: '', quantity: '' }],
//           description: '',
//           category: '',
//           image: null,
//         });
//       } else {
//         toast.error('Failed to add product.');
//       }
//     } catch (error) {
//       console.error('Error occurred while adding product:', error);
//       toast.error('Error occurred while adding product.');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <Container>
//         <ToastContainer autoClose={2000} />
//         <img
//           src={
//             product.image
//               ? URL.createObjectURL(product.image)
//               : 'https://via.placeholder.com/300'
//           }
//           alt="Product"
//           style={{ maxWidth: '100%', height: '300px' }}
//         />

//         <StyledFormControl>
//           <InputTextField
//             onChange={(e) =>
//               setProduct({ ...product, productName: e.target.value })
//             }
//             value={product.productName}
//             name="productName"
//             placeholder="Product Name"
//           />
//           <InputTextField
//             onChange={(e) =>
//               setProduct({ ...product, category: e.target.value })
//             }
//             value={product.category}
//             name="category"
//             placeholder="Category"
//           />
//           {product.prices.map((price, index) => (
//             <div key={index}>
//               <InputTextField
//                 onChange={(e) => handleChange(e, index)}
//                 value={price.price}
//                 name="price"
//                 placeholder="Price"
//                 type="number"
//               />
//               <InputTextField
//                 onChange={(e) => handleChange(e, index)}
//                 value={price.quantity}
//                 name="quantity"
//                 placeholder="Quantity"
//               />
//             </div>
//           ))}
//           <Button onClick={addPrice} variant="outlined" color="primary">
//             Add Price/Quantity
//           </Button>
//           <InputTextField
//             type="file"
//             onChange={handleImageChange}
//           />
//         </StyledFormControl>

//         <TextareaAutosize
//           placeholder="Product Description"
//           value={product.description}
//           name="description"
//           onChange={(e) =>
//             setProduct({ ...product, description: e.target.value })
//           }
//           style={{
//             width: '100%',
//             border: 'none',
//             marginTop: '10px',
//             fontSize: '18px',
//             minHeight: '100px',
//             resize: 'vertical',
//           }}
//         />
//         <AddProductButton onClick={saveProduct} variant="contained" color="primary">
//           Add Product
//         </AddProductButton>
//       </Container>
//     </>
//   );
// };

// export default AddProduct;

// AddProduct.js

// import React, { useState, useEffect } from 'react';
// import { styled, Box, Button, InputBase, FormControl } from '@mui/material';
// import { useNavigate, useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import Navbar from './AdminNavbar';

// const Container = styled(Box)(({ theme }) => ({
//   margin: '50px 100px',
//   [theme.breakpoints.down('md')]: {
//     margin: 0,
//   },
// }));

// const StyledFormControl = styled(FormControl)({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '10px',
// });

// const InputTextField = styled(InputBase)({
//   fontSize: '25px',
// });

// const AddProductButton = styled(Button)({
//   marginTop: '10px',
//   marginBottom: '10px',
// });

// const AddProduct = () => {
//   const navigate = useNavigate();
//   const { adminId: urlAdminId } = useParams();
//   const [adminId, setAdminId] = useState("");

//   // Effect to retrieve adminId from localStorage on component mount
//   useEffect(() => {
//     const storedAdminId = localStorage.getItem('adminId');
//     if (storedAdminId) {
//       setAdminId(storedAdminId);
//     } else {
//       setAdminId(urlAdminId); // If not in localStorage, set from URL params
//       localStorage.setItem('adminId', urlAdminId); // Also store in localStorage
//     }
//   }, [urlAdminId]); // Include urlAdminId in dependency array

//   const [product, setProduct] = useState({
//     adminId: adminId, // Use adminId retrieved from localStorage or URL params
//     productName: '',
//     prices: [{ price: '', quantity: '' }],
//     description: '',
//     category: '',
//     image: null,
//   });

//   const handleChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedPrices = [...product.prices];
//     updatedPrices[index][name] = value;
//     setProduct({ ...product, prices: updatedPrices });
//   };

//   const addPrice = () => {
//     setProduct({
//       ...product,
//       prices: [...product.prices, { price: '', quantity: '' }],
//     });
//   };

//   const handleImageChange = (e) => {
//     setProduct({ ...product, image: e.target.files[0] });
//   };

//   const saveProduct = async () => {
//     const formData = new FormData();
//     formData.append('adminId', product.adminId);
//     formData.append('productName', product.productName);
//     formData.append('description', product.description);
//     formData.append('category', product.category);
//     formData.append('image', product.image);
//     formData.append('prices', JSON.stringify(product.prices));

//     try {
//       const response = await fetch(
//         'https://grocery-management-system-backend-7.onrender.com/api/upload',
//         {
//           method: 'POST',
//           body: formData,
//         }
//       );

//       if (response.ok) {
//         toast.success('Product added successfully!');
//         setProduct({
//           productName: '',
//           prices: [{ price: '', quantity: '' }],
//           description: '',
//           category: '',
//           image: null,
//         });
//       } else {
//         toast.error('Failed to add product.');
//       }
//     } catch (error) {
//       console.error('Error occurred while adding product:', error);
//       toast.error('Error occurred while adding product.');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <Container>
//         <ToastContainer autoClose={2000} />
//         <img
//           src={
//             product.image
//               ? URL.createObjectURL(product.image)
//               : 'https://via.placeholder.com/300'
//           }
//           alt="Product"
//           style={{ maxWidth: '100%', height: '300px' }}
//         />

//         <StyledFormControl>
//           <InputTextField
//             onChange={(e) =>
//               setProduct({ ...product, productName: e.target.value })
//             }
//             value={product.productName}
//             name="productName"
//             placeholder="Product Name"
//           />
//           <InputTextField
//             onChange={(e) =>
//               setProduct({ ...product, category: e.target.value })
//             }
//             value={product.category}
//             name="category"
//             placeholder="Category"
//           />
//           {product.prices.map((price, index) => (
//             <div key={index}>
//               <InputTextField
//                 onChange={(e) => handleChange(e, index)}
//                 value={price.price}
//                 name="price"
//                 placeholder="Price"
//                 type="number"
//               />
//               <InputTextField
//                 onChange={(e) => handleChange(e, index)}
//                 value={price.quantity}
//                 name="quantity"
//                 placeholder="Quantity"
//               />
//             </div>
//           ))}
//           <Button onClick={addPrice} variant="outlined" color="primary">
//             Add Price/Quantity
//           </Button>
//           <InputTextField
//             type="file"
//             onChange={handleImageChange}
//           />
//         </StyledFormControl>

//         <TextareaAutosize
//           placeholder="Product Description"
//           value={product.description}
//           name="description"
//           onChange={(e) =>
//             setProduct({ ...product, description: e.target.value })
//           }
//           style={{
//             width: '100%',
//             border: 'none',
//             marginTop: '10px',
//             fontSize: '18px',
//             minHeight: '100px',
//             resize: 'vertical',
//           }}
//         />
//         <AddProductButton onClick={saveProduct} variant="contained" color="primary">
//           Add Product
//         </AddProductButton>
//       </Container>
//     </>
//   );
// };

// export default AddProduct;

// import React, { useState, useEffect } from 'react';
// import { styled, Box, Button, InputBase, FormControl } from '@mui/material';
// import { AddCircle as Add } from '@mui/icons-material';
// import { useNavigate, useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import TextareaAutosize from '@mui/material/TextareaAutosize'; // Import TextareaAutosize
// import Navbar from "./AdminNavbar";

// const Container = styled(Box)(({ theme }) => ({
//     margin: '50px 100px',
//     [theme.breakpoints.down('md')]: {
//         margin: 0
//     }
// }));

// const StyledFormControl = styled(FormControl)({
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: '10px',
//     marginTop: '10px',
// });

// const InputTextField = styled(InputBase)({
//     fontSize: '25px',
//     flex: '1',
// });

// const AddProductButton = styled(Button)({
//     marginLeft: 'auto', // Push the button to the right
// });

// const AddProduct = () => {
//     const navigate = useNavigate();
//     const { adminId: urlAdminId } = useParams();
//     const [adminId, setAdminId] = useState('');

//     // Effect to retrieve adminId from localStorage on component mount
//     useEffect(() => {
//         const storedAdminId = localStorage.getItem('adminId');
//         if (storedAdminId) {
//             setAdminId(storedAdminId);
//         } else {
//             setAdminId(urlAdminId); // If not in localStorage, set from URL params
//             localStorage.setItem('adminId', urlAdminId); // Also store in localStorage
//         }
//     }, [urlAdminId]); // Include urlAdminId in dependency array

//     // Log the adminId for checking
//     console.log('Admin ID:', adminId);

//     const [product, setProduct] = useState({
//         productName: '',
//         price: '',
//         description: '',
//         quantity: '', // Change quantity to string
//         category: '',
//         image: null
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({ ...product, [name]: value });
//     }

//     const handleImageChange = (e) => {
//         setProduct({ ...product, image: e.target.files[0] });
//     }

//     const saveProduct = async () => {
//         const formData = new FormData();
//         formData.append('adminId', adminId); // Send the adminId obtained from URL or local storage
//         formData.append('productName', product.productName);
//         formData.append('price', product.price);
//         formData.append('description', product.description);
//         formData.append('quantity', product.quantity);
//         formData.append('category', product.category);
//         formData.append('image', product.image);

//         try {
//             const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/upload', {
//                 method: 'POST',
//                 body: formData
//             });

//             if (response.ok) {
//                 toast.success('Product added successfully!');
//                 setProduct({
//                     productName: '',
//                     price: '',
//                     description: '',
//                     quantity: '',
//                     category: '',
//                     image: null
//                 });
//             } else {
//                 toast.error('Failed to add product.');
//             }
//         } catch (error) {
//             console.error('Error occurred while adding product:', error);
//             toast.error('Error occurred while adding product.');
//         }
//     }

//     return (
//         <>
//             <Navbar />
//             <Container>
//                 <ToastContainer autoClose={2000} />
//                 <img 
//                     src={product.image ? URL.createObjectURL(product.image) : 'https://via.placeholder.com/300'} 
//                     alt="Product" 
//                     style={{ maxWidth: '100%', height: '300px' }} // Adjust image size according to device
//                 />

//                 <StyledFormControl>
//                     <InputTextField 
//                         onChange={handleChange} 
//                         value={product.productName}
//                         name='productName' 
//                         placeholder="Product Name" 
//                     />
//                     <InputTextField 
//                         onChange={handleChange} 
//                         value={product.price}
//                         name='price' 
//                         placeholder="Price" 
//                         type="number"
//                     />
//                     <InputTextField 
//                         onChange={handleChange} 
//                         value={product.quantity}
//                         name='quantity' 
//                         placeholder="Quantity" 
//                     />
//                     <InputTextField 
//                         onChange={handleChange} 
//                         value={product.category}
//                         name='category' 
//                         placeholder="Category" 
//                     />
//                     <label htmlFor="fileInput">
//                         <Add fontSize="large" color="action" />
//                     </label>
//                     <input
//                         type="file"
//                         id="fileInput"
//                         style={{ display: "none" }}
//                         onChange={handleImageChange}
//                     />
//                     <AddProductButton onClick={saveProduct} variant="contained" color="primary">Add Product</AddProductButton>
//                 </StyledFormControl>

//                 <TextareaAutosize
//                     placeholder="Product Description"
//                     value={product.description}
//                     name='description'
//                     onChange={handleChange}
//                     style={{ width: '100%', border: 'none', marginTop: '10px', fontSize: '18px', minHeight: '100px', resize: 'vertical' }}
//                 />
//             </Container>
//         </>
//     )
// }

// export default AddProduct;

// import React, { useState, useEffect } from 'react';
// import { styled, Box, Button, InputBase, FormControl } from '@mui/material';
// import { AddCircle as Add } from '@mui/icons-material';
// import { useNavigate, useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import TextareaAutosize from '@mui/material/TextareaAutosize'; // Import TextareaAutosize
// import Navbar from "./AdminNavbar";

// const Container = styled(Box)(({ theme }) => ({
//     margin: '50px 100px',
//     [theme.breakpoints.down('md')]: {
//         margin: 0
//     }
// }));

// const StyledFormControl = styled(FormControl)({
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: '10px',
//     marginTop: '10px',
// });

// const InputTextField = styled(InputBase)({
//     fontSize: '25px',
//     flex: '1',
// });

// const AddProductButton = styled(Button)({
//     marginLeft: 'auto', // Push the button to the right
// });

// const AddProduct = () => {
//     const navigate = useNavigate();
//     const { adminId: urlAdminId } = useParams();
//     const [adminId, setAdminId] = useState('');

//     // Effect to retrieve adminId from localStorage on component mount
//     useEffect(() => {
//         const storedAdminId = localStorage.getItem('adminId');
//         if (storedAdminId) {
//             setAdminId(storedAdminId);
//         } else {
//             setAdminId(urlAdminId); // If not in localStorage, set from URL params
//             localStorage.setItem('adminId', urlAdminId); // Also store in localStorage
//         }
//     }, [urlAdminId]); // Include urlAdminId in dependency array

//     // Log the adminId for checking
//     console.log('Admin ID:', adminId);

//     const [product, setProduct] = useState({
//         adminId: adminId,
//         productName: '',
//         price: '',
//         description: '',
//         quantity: '', // Change quantity to string
//         category: '',
//         image: null
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({ ...product, [name]: value });
//     }

//     const handleImageChange = (e) => {
//         setProduct({ ...product, image: e.target.files[0] });
//     }

//     const saveProduct = async () => {
//         const formData = new FormData();
//         formData.append('adminId', adminId); // Send the adminId obtained from URL or local storage
//         formData.append('productName', product.productName);
//         formData.append('price', product.price);
//         formData.append('description', product.description);
//         formData.append('quantity', product.quantity);
//         formData.append('category', product.category);
//         formData.append('image', product.image);

//         try {
//             const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/upload', {
//                 method: 'POST',
//                 body: formData
//             });

//             if (response.ok) {
//                 toast.success('Product added successfully!');
//                 setProduct({
//                     adminId: adminId,
//                     productName: '',
//                     price: '',
//                     description: '',
//                     quantity: '',
//                     category: '',
//                     image: null
//                 });
//             } else {
//                 toast.error('Failed to add product.');
//             }
//         } catch (error) {
//             console.error('Error occurred while adding product:', error);
//             toast.error('Error occurred while adding product.');
//         }
//     }

//     return (
//         <>
//             <Navbar />
//             <Container>
//                 <ToastContainer autoClose={2000} />
//                 <img 
//                     src={product.image ? URL.createObjectURL(product.image) : 'https://via.placeholder.com/300'} 
//                     alt="Product" 
//                     style={{ maxWidth: '100%', height: '300px' }} // Adjust image size according to device
//                 />

//                 <StyledFormControl>
//                     <InputTextField 
//                         onChange={handleChange} 
//                         value={product.productName}
//                         name='productName' 
//                         placeholder="Product Name" 
//                     />
//                     <InputTextField 
//                         onChange={handleChange} 
//                         value={product.price}
//                         name='price' 
//                         placeholder="Price" 
//                         type="number"
//                     />
//                     <InputTextField 
//                         onChange={handleChange} 
//                         value={product.quantity}
//                         name='quantity' 
//                         placeholder="Quantity" 
//                     />
//                     <InputTextField 
//                         onChange={handleChange} 
//                         value={product.category}
//                         name='category' 
//                         placeholder="Category" 
//                     />
//                     <label htmlFor="fileInput">
//                         <Add fontSize="large" color="action" />
//                     </label>
//                     <input
//                         type="file"
//                         id="fileInput"
//                         style={{ display: "none" }}
//                         onChange={handleImageChange}
//                     />
//                     <AddProductButton onClick={saveProduct} variant="contained" color="primary">Add Product</AddProductButton>
//                 </StyledFormControl>

//                 <TextareaAutosize
//                     placeholder="Product Description"
//                     value={product.description}
//                     name='description'
//                     onChange={handleChange}
//                     style={{ width: '100%', border: 'none', marginTop: '10px', fontSize: '18px', minHeight: '100px', resize: 'vertical' }}
//                 />
//             </Container>
//         </>
//     )
// }

// export default AddProduct;

// import React, { useState, useEffect } from 'react';
// import { styled, Box, Button, InputBase, FormControl, Select, MenuItem } from '@mui/material';
// import { AddCircle as Add } from '@mui/icons-material';
// import { useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import TextareaAutosize from '@mui/material/TextareaAutosize'; // Import TextareaAutosize
// import Navbar from "./AdminNavbar";

// const Container = styled(Box)(({ theme }) => ({
//     margin: '50px 100px',
//     [theme.breakpoints.down('md')]: {
//         margin: 0
//     }
// }));

// const StyledFormControl = styled(FormControl)({
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: '10px',
//     marginTop: '10px',
// });

// const InputTextField = styled(InputBase)({
//     fontSize: '25px',
//     flex: '1',
// });

// const AddProductButton = styled(Button)({
//     marginLeft: 'auto', // Push the button to the right
// });

// const AddProduct = () => {
    
//     const { adminId: urlAdminId } = useParams();
//     const [adminId, setAdminId] = useState('');
//     const [category, setCategory] = useState('');

//     // Effect to retrieve adminId from localStorage on component mount
//     useEffect(() => {
//         const storedAdminId = localStorage.getItem('adminId');
//         if (storedAdminId) {
//             setAdminId(storedAdminId);
//         } else {
//             setAdminId(urlAdminId); // If not in localStorage, set from URL params
//             localStorage.setItem('adminId', urlAdminId); // Also store in localStorage
//         }
//     }, [urlAdminId]); // Include urlAdminId in dependency array

//     // Log the adminId for checking
//     console.log('Admin ID:', adminId);

//     const [product, setProduct] = useState({
//         adminId: adminId,
//         productName: '',
//         price: '',
//         description: '',
//         quantity: '', // Change quantity to string
//         category: '',
//         image: null
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({ ...product, [name]: value });
//     }

//     const handleCategoryChange = (e) => {
//         setCategory(e.target.value);
//         setProduct({ ...product, category: e.target.value });
//     }

//     const handleImageChange = (e) => {
//         setProduct({ ...product, image: e.target.files[0] });
//     }

//     const saveProduct = async () => {
//         const formData = new FormData();
//         formData.append('adminId', adminId); // Send the adminId obtained from URL or local storage
//         formData.append('productName', product.productName);
//         formData.append('price', product.price);
//         formData.append('description', product.description);
//         formData.append('quantity', product.quantity);
//         formData.append('category', product.category);
//         formData.append('image', product.image);

//         try {
//             const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/upload', {
//                 method: 'POST',
//                 body: formData
//             });

//             if (response.ok) {
//                 toast.success('Product added successfully!');
//                 setProduct({
//                     adminId: adminId,
//                     productName: '',
//                     price: '',
//                     description: '',
//                     quantity: '',
//                     category: '',
//                     image: null
//                 });
//             } else {
//                 toast.error('Failed to add product.');
//             }
//         } catch (error) {
//             console.error('Error occurred while adding product:', error);
//             toast.error('Error occurred while adding product.');
//         }
//     }

//     return (
//         <>
//             <Navbar />
//             <Container>
//                 <ToastContainer autoClose={2000} />
//                 <img 
//                     src={product.image ? URL.createObjectURL(product.image) : 'https://via.placeholder.com/300'} 
//                     alt="Product" 
//                     style={{ maxWidth: '100%', height: '300px' }} // Adjust image size according to device
//                 />

//                 <StyledFormControl>
//                     <InputTextField 
//                         onChange={handleChange} 
//                         value={product.productName}
//                         name='productName' 
//                         placeholder="Product Name" 
//                     />
//                     <InputTextField 
//                         onChange={handleChange} 
//                         value={product.price}
//                         name='price' 
//                         placeholder="Price" 
//                         type="number"
//                     />
//                     <InputTextField 
//                         onChange={handleChange} 
//                         value={product.quantity}
//                         name='quantity' 
//                         placeholder="Quantity" 
//                     />
//                     <Select
//     value={category}
//     onChange={handleCategoryChange}
//     placeholder="Category"
//     style={{ minWidth: '120px' }}
// >
//     {/* <MenuItem value="">Select Category</MenuItem> Default value */}
//     <MenuItem value="Fruits & Vegetables">Fruits & Vegetables</MenuItem>
//     <MenuItem value="Dairy & Bakery">Dairy & Bakery</MenuItem>
//     <MenuItem value="Staples">Staples</MenuItem>
//     <MenuItem value="Snacks & Branded Foods">Snacks & Branded Foods</MenuItem>
//     <MenuItem value="Beverages">Beverages</MenuItem>
//     <MenuItem value="Personal Care">Personal Care</MenuItem>
//     <MenuItem value="Home Care">Home Care</MenuItem>
//     <MenuItem value="Mom & Baby Care">Mom & Baby Care</MenuItem>
//     <MenuItem value="Pets">Pets</MenuItem>
// </Select>

//                     <label htmlFor="fileInput">
//                         <Add fontSize="large" color="action" />
//                     </label>
//                     <input
//                         type="file"
//                         id="fileInput"
//                         style={{ display: "none" }}
//                         onChange={handleImageChange}
//                     />
//                     <AddProductButton onClick={saveProduct} variant="contained" color="primary">Add Product</AddProductButton>
//                 </StyledFormControl>

//                 <TextareaAutosize
//                     placeholder="Product Description"
//                     value={product.description}
//                     name='description'
//                     onChange={handleChange}
//                     style={{ width: '100%', border: 'none', marginTop: '10px', fontSize: '18px', minHeight: '100px', resize: 'vertical' }}
//                 />
//             </Container>
//         </>
//     )
// }

// export default AddProduct;

// import React, { useState, useEffect } from 'react';
// import { styled, Box, Button, InputBase, FormControl, Select, MenuItem } from '@mui/material';
// import { AddCircle as Add } from '@mui/icons-material';
// import { useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import Navbar from "./AdminNavbar";

// const Container = styled(Box)(({ theme }) => ({
//     margin: '50px 100px',
//     [theme.breakpoints.down('md')]: {
//         margin: 0
//     }
// }));

// const StyledFormControl = styled(FormControl)({
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: '10px',
//     marginTop: '10px',
// });

// const InputTextField = styled(InputBase)({
//     fontSize: '25px',
//     flex: '1',
// });

// const AddProductButton = styled(Button)({
//     marginLeft: 'auto',
// });

// const AddProduct = () => {
//     const { adminId: urlAdminId } = useParams();
//     const [adminId, setAdminId] = useState('');
//     const [category, setCategory] = useState('');
//     console.log("add product" + urlAdminId);

//     useEffect(() => {
//         if (!adminId) {
//             const storedAdminId = localStorage.getItem('adminId');
//             if (storedAdminId) {
//                 setAdminId(storedAdminId);
//             } else {
//                 setAdminId(urlAdminId);
//                 localStorage.setItem('adminId', urlAdminId);
//             }
//         }
//     }, [adminId, urlAdminId]);
//     console.log("add product: " + adminId + " url: " + urlAdminId);
//     const [product, setProduct] = useState({
//         adminId: adminId,
//         productName: '',
//         price: '',
//         description: '',
//         quantity: '',
//         category: '',
//         image: null
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({ ...product, [name]: value });
//     }

//     const handleCategoryChange = (e) => {
//         setCategory(e.target.value);
//         setProduct({ ...product, category: e.target.value });
//     }

//     const handleImageChange = (e) => {
//         setProduct({ ...product, image: e.target.files[0] });
//     }

//     const saveProduct = async () => {
//         const formData = new FormData();
//         formData.append('adminId', adminId);
//         formData.append('productName', product.productName);
//         formData.append('price', product.price);
//         formData.append('description', product.description);
//         formData.append('quantity', product.quantity);
//         formData.append('category', product.category);
//         formData.append('image', product.image);

//         try {
//             const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/upload', {
//                 method: 'POST',
//                 body: formData
//             });

//             if (response.ok) {
//                 toast.success('Product added successfully!');
//                 setProduct({
//                     adminId: adminId,
//                     productName: '',
//                     price: '',
//                     description: '',
//                     quantity: '',
//                     category: '',
//                     image: null
//                 });
//             } else {
//                 toast.error('Failed to add product.');
//             }
//         } catch (error) {
//             console.error('Error occurred while adding product:', error);
//             toast.error('Error occurred while adding product.');
//         }
//     }

//     return (
//         <>
//             <Navbar/>
//             <Container>
//                 <ToastContainer autoClose={2000} />
//                 <br/><br/><br/><br/>
//                 <img 
//                     src={product.image ? URL.createObjectURL(product.image) : 'https://via.placeholder.com/300'} 
//                     alt="Product" 
//                     style={{ maxWidth: '100%', height: '300px' }} 
//                 />

//                 <StyledFormControl>
//                     <InputTextField 
//                         onChange={handleChange} 
//                         value={product.productName}
//                         name='productName' 
//                         placeholder="Product Name" 
//                     />
//                     <InputTextField 
//                         onChange={handleChange} 
//                         value={product.price}
//                         name='price' 
//                         placeholder="Price" 
//                         type="number"
//                     />
//                     <InputTextField 
//                         onChange={handleChange} 
//                         value={product.quantity}
//                         name='quantity' 
//                         placeholder="Quantity" 
//                     />
//                     <Select
//                         value={category}
//                         onChange={handleCategoryChange}
//                         placeholder="Category"
//                         style={{ minWidth: '120px' }}
//                     >
//                         <MenuItem value="Fruits & Vegetables">Fruits & Vegetables</MenuItem>
//                         <MenuItem value="Dairy & Bakery">Dairy & Bakery</MenuItem>
//                         <MenuItem value="Staples">Staples</MenuItem>
//                         <MenuItem value="Snacks & Branded Foods">Snacks & Branded Foods</MenuItem>
//                         <MenuItem value="Beverages">Beverages</MenuItem>
//                         <MenuItem value="Personal Care">Personal Care</MenuItem>
//                         <MenuItem value="Home Care">Home Care</MenuItem>
//                         <MenuItem value="Mom & Baby Care">Mom & Baby Care</MenuItem>
//                         <MenuItem value="Pets">Pets</MenuItem>
//                     </Select>

//                     <label htmlFor="fileInput">
//                         <Add fontSize="large" color="action" />
//                     </label>
//                     <input
//                         type="file"
//                         id="fileInput"
//                         style={{ display: "none" }}
//                         onChange={handleImageChange}
//                     />
//                     <AddProductButton onClick={saveProduct} variant="contained" color="primary">Add Product</AddProductButton>
//                 </StyledFormControl>

//                 <TextareaAutosize
//                     placeholder="Product Description"
//                     value={product.description}
//                     name='description'
//                     onChange={handleChange}
//                     style={{ width: '100%', border: 'none', marginTop: '10px', fontSize: '18px', minHeight: '100px', resize: 'vertical' }}
//                 />
//             </Container>
//         </>
//     )
// }

// export default AddProduct;

import React, { useState, useEffect } from 'react';
import { styled, Box, Button, InputBase, FormControl, Select, MenuItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Navbar from "./AdminNavbar";
// Import the uploaded image


const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const StyledFormControl = styled(FormControl)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
});

const InputTextField = styled(InputBase)({
    fontSize: '25px',
    flex: '1',
});

const AddProductButton = styled(Button)({
    marginLeft: 'auto',
});

const AddProduct = () => {
    const { adminId: urlAdminId } = useParams();
    const [adminId, setAdminId] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (!adminId) {
            const storedAdminId = localStorage.getItem('adminId');
            if (storedAdminId) {
                setAdminId(storedAdminId);
            } else {
                setAdminId(urlAdminId);
                localStorage.setItem('adminId', urlAdminId);
            }
        }
    }, [adminId, urlAdminId]);

    const [product, setProduct] = useState({
        adminId: adminId,
        productName: '',
        price: '',
        description: '',
        quantity: '',
        category: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setProduct({ ...product, category: e.target.value });
    }

    const handleImageChange = (e) => {
        setProduct({ ...product, image: e.target.files[0] });
    }

    const saveProduct = async () => {
        const formData = new FormData();
        formData.append('adminId', adminId);
        formData.append('productName', product.productName);
        formData.append('price', product.price);
        formData.append('description', product.description);
        formData.append('quantity', product.quantity);
        formData.append('category', product.category);
        formData.append('image', product.image);

        try {
            const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                toast.success('Product added successfully!');
                setProduct({
                    adminId: adminId,
                    productName: '',
                    price: '',
                    description: '',
                    quantity: '',
                    category: '',
                    image: null
                });
            } else {
                toast.error('Failed to add product.');
            }
        } catch (error) {
            console.error('Error occurred while adding product:', error);
            toast.error('Error occurred while adding product.');
        }
    }

    return (
        <>
            <Navbar/>
            <Container>
                <ToastContainer autoClose={2000} />
                <br/><br/><br/><br/>
                <img 
                    src={product.image ? URL.createObjectURL(product.image) : 'https://via.placeholder.com/300'} 
                    alt="Product" 
                    style={{ maxWidth: '100%', height: '300px' }} 
                />

                <StyledFormControl>
                    <InputTextField 
                        onChange={handleChange} 
                        value={product.productName}
                        name='productName' 
                        placeholder="Product Name" 
                    />
                    <InputTextField 
                        onChange={handleChange} 
                        value={product.price}
                        name='price' 
                        placeholder="Price" 
                        type="number"
                    />
                    <InputTextField 
                        onChange={handleChange} 
                        value={product.quantity}
                        name='quantity' 
                        placeholder="Quantity" 
                    />
                     <Select
                        value={category}
                        onChange={handleCategoryChange}
                        displayEmpty
                        style={{ minWidth: '120px' }}
                    >
                         <MenuItem value="" disabled>
                        <em>Select Category</em>
                         </MenuItem>
                        <MenuItem value="Fruits & Vegetables">Fruits & Vegetables</MenuItem>
                        <MenuItem value="Dairy & Bakery">Dairy & Bakery</MenuItem>
                        <MenuItem value="Staples">Staples</MenuItem>
                        <MenuItem value="Snacks & Branded Foods">Snacks & Branded Foods</MenuItem>
                        <MenuItem value="Beverages">Beverages</MenuItem>
                        <MenuItem value="Personal Care">Personal Care</MenuItem>
                        <MenuItem value="Home Care">Home Care</MenuItem>
                        <MenuItem value="Mom & Baby Care">Mom & Baby Care</MenuItem>
                        <MenuItem value="Pets">Pets</MenuItem>
                    </Select>

                    <label htmlFor="fileInput">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLF-LUECE1prSue_wYkv82-H4IPDyDkJqxcQ&s" alt="Edit" style={{ width: '36px', height: '36px' }} />
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                    />
                    <AddProductButton onClick={saveProduct} variant="contained" color="primary">Add Product</AddProductButton>
                </StyledFormControl>

                <TextareaAutosize
                    placeholder="Product Description"
                    value={product.description}
                    name='description'
                    onChange={handleChange}
                    style={{ width: '100%', border: 'none', marginTop: '10px', fontSize: '18px', minHeight: '100px', resize: 'vertical' }}
                />
            </Container>
        </>
    )
}

export default AddProduct;






