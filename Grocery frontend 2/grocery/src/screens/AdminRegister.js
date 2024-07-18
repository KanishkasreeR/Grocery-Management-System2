// import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

// const RegistrationForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     storeName: '',
//     storeAddress: '',
//     contactNumber: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/Adminregister', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         // Registration successful
//         toast.success('Registration successful');
//         // Redirect to home page or any other page using navigate
//         navigate('/adminlogin');
//       } else {
//         // Registration failed
//         const errorData = await response.json();
//         toast.error(errorData.error);
//       }
//     } catch (error) {
//       console.error(error.message);
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="form-title">Registration</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="main-user-info">
//           <div className="user-input-box">
//             <label htmlFor="fullName">Full Name</label>
//             <input
//               type="text"
//               id="fullName"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter Full Name"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter Email"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter Password"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="storeName">Store Name</label>
//             <input
//               type="text"
//               id="storeName"
//               name="storeName"
//               value={formData.storeName}
//               onChange={handleChange}
//               placeholder="Enter Store Name"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="storeAddress">Store Address</label>
//             <input
//               type="text"
//               id="storeAddress"
//               name="storeAddress"
//               value={formData.storeAddress}
//               onChange={handleChange}
//               placeholder="Enter Store Address"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="phoneNumber">Contact Number</label>
//             <input
//               type="text"
//               id="phoneNumber"
//               name="contactNumber"
//               value={formData.contactNumber}
//               onChange={handleChange}
//               placeholder="Enter Contact Number"
//               required
//             />
//           </div>
//         </div>
//         <div className="form-submit-btn">
//           <input type="submit" value="Register" />
//         </div>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default RegistrationForm;


// import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';


// const RegistrationForm = ({ onClose }) => { // Receive onClose as a prop
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     storeName: '',
//     storeAddress: '',
//     contactNumber: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/Adminregister', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json'
//   //       },
//   //       body: JSON.stringify(formData)
//   //     });

//   //     if (response.ok) {
//   //       // Registration successful
//   //       toast.success('Registration successful');
//   //       // Redirect to home page or any other page using navigate
//   //       navigate('/adminlogin');
//   //     } else {
//   //       // Registration failed
//   //       const errorData = await response.json();
//   //       toast.error(errorData.error);
//   //     }
//   //   } catch (error) {
//   //     console.error(error.message);
//   //     toast.error(error.message);
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/Adminregister', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
  
//       if (response.ok) {
//         // Registration successful
//         const data = await response.json();
//         const adminId = data._id; // Assuming the response contains the admin ID
//         // Store admin ID locally
//         localStorage.setItem('adminId', adminId);
//         // Redirect to admin home page with admin ID as parameter
//         navigate(`/adminhome?adminId=${adminId}`);
//         // Show success toast
//         toast.success('Registration successful');
//       } else {
//         // Registration failed
//         const errorData = await response.json();
//         toast.error(errorData.error);
//       }
//     } catch (error) {
//       console.error(error.message);
//       toast.error(error.message);
//     }
//   };
  

//   const handleClose = () => {
//     // Close the pop-up window
//     onClose();
//   };

//   return (
//     <div className="popup-container">
//       <div className="popup-box">
//         <span className="close" onClick={handleClose}>&times;</span>
//         <h1 className="form-title">Registration</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="user-input-box">
//             <label htmlFor="fullName">Full Name</label>
//             <input
//               type="text"
//               id="fullName"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter Full Name"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter Email"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter Password"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="storeName">Store Name</label>
//             <input
//               type="text"
//               id="storeName"
//               name="storeName"
//               value={formData.storeName}
//               onChange={handleChange}
//               placeholder="Enter Store Name"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="storeAddress">Store Address</label>
//             <input
//               type="text"
//               id="storeAddress"
//               name="storeAddress"
//               value={formData.storeAddress}
//               onChange={handleChange}
//               placeholder="Enter Store Address"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="phoneNumber">Contact Number</label>
//             <input
//               type="text"
//               id="phoneNumber"
//               name="contactNumber"
//               value={formData.contactNumber}
//               onChange={handleChange}
//               placeholder="Enter Contact Number"
//               required
//             />
//           </div>
//           <div className="form-submit-btn">
//             <input type="submit" value="Register" />
//           </div>
//         </form>
//         <div className="login-link">
//           <p>Already have an account? <span onClick={() => navigate('/adminlogin')}>Login</span></p>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default RegistrationForm;

// import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

// const RegistrationForm = ({ onClose }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     storeName: '',
//     storeAddress: '',
//     contactNumber: '',
//     storeHours: '', // Add storeHours to match backend
//     storeImage: null, // Add storeImage for file upload
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, storeImage: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataToSend = new FormData();
//       Object.entries(formData).forEach(([key, value]) => {
//         formDataToSend.append(key, value);
//       });

//       const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/Adminregister', {
//         method: 'POST',
//         body: formDataToSend
//       });

//       if (response.ok) {
//         const data = await response.json();
//         const adminId = data._id;
//         localStorage.setItem('adminId', adminId);
//         navigate(`/adminhome?adminId=${adminId}`);
//         toast.success('Registration successful');
//       } else {
//         const errorData = await response.json();
//         toast.error(errorData.error);
//       }
//     } catch (error) {
//       console.error(error.message);
//       toast.error(error.message);
//     }
//   };

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <div className="popup-container">
//       <div className="popup-box">
//         <span className="close" onClick={handleClose}>&times;</span>
//         <h1 className="form-title">Registration</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="user-input-box">
//             <label htmlFor="fullName">Full Name</label>
//             <input
//               type="text"
//               id="fullName"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter Full Name"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter Email"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter Password"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="storeName">Store Name</label>
//             <input
//               type="text"
//               id="storeName"
//               name="storeName"
//               value={formData.storeName}
//               onChange={handleChange}
//               placeholder="Enter Store Name"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="storeAddress">Store Address</label>
//             <input
//               type="text"
//               id="storeAddress"
//               name="storeAddress"
//               value={formData.storeAddress}
//               onChange={handleChange}
//               placeholder="Enter Store Address"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="phoneNumber">Contact Number</label>
//             <input
//               type="text"
//               id="phoneNumber"
//               name="contactNumber"
//               value={formData.contactNumber}
//               onChange={handleChange}
//               placeholder="Enter Contact Number"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="storeHours">Store Hours</label>
//             <input
//               type="text"
//               id="storeHours"
//               name="storeHours"
//               value={formData.storeHours}
//               onChange={handleChange}
//               placeholder="Enter Store Hours"
//               required
//             />
//           </div>
//           <div className="user-input-box">
//             <label htmlFor="storeImage">Store Image</label>
//             <input
//               type="file"
//               id="storeImage"
//               name="storeImage"
//               onChange={handleFileChange}
//               required
//             />
//           </div>
//           <div className="form-submit-btn">
//             <input type="submit" value="Register" />
//           </div>
//         </form>
//         <div className="login-link">
//           <p>Already have an account? <span onClick={() => navigate('/adminlogin')}>Login</span></p>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default RegistrationForm;

// import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import './RegistrationForm.css'; // Import custom CSS file for styling

// const RegistrationForm = ({ onClose }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     storeName: '',
//     storeAddress: '',
//     contactNumber: '',
//     storeHours: '',
//     storeImage: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, storeImage: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataToSend = new FormData();
//       Object.entries(formData).forEach(([key, value]) => {
//         formDataToSend.append(key, value);
//       });

//       const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/Adminregister', {
//         method: 'POST',
//         body: formDataToSend
//       });

//       if (response.ok) {
//         const data = await response.json();
//         const adminId = data._id;
//         localStorage.setItem('adminId', adminId);
//         navigate(`/adminhome?adminId=${adminId}`);
//         toast.success('Registration successful');
//       } else {
//         const errorData = await response.json();
//         toast.error(errorData.error);
//       }
//     } catch (error) {
//       console.error(error.message);
//       toast.error(error.message);
//     }
//   };

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <div className="popup-container">
//       <div className="popup-box">
//         <span className="close" onClick={handleClose}>&times;</span>
//         <h1 className="form-title">Registration</h1>
//         <form onSubmit={handleSubmit} className="registration-form">
//           <div className="form-row">
//             <div className="form-col">
//               <div className="user-input-box">
//                 <label htmlFor="fullName">Full Name</label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter Full Name"
//                   required
//                 />
//               </div>
//               <div className="user-input-box">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter Email"
//                   required
//                 />
//               </div>
//               <div className="user-input-box">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Enter Password"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="form-col">
//               <div className="user-input-box">
//                 <label htmlFor="storeName">Store Name</label>
//                 <input
//                   type="text"
//                   id="storeName"
//                   name="storeName"
//                   value={formData.storeName}
//                   onChange={handleChange}
//                   placeholder="Enter Store Name"
//                   required
//                 />
//               </div>
//               <div className="user-input-box">
//                 <label htmlFor="storeAddress">Store Address</label>
//                 <input
//                   type="text"
//                   id="storeAddress"
//                   name="storeAddress"
//                   value={formData.storeAddress}
//                   onChange={handleChange}
//                   placeholder="Enter Store Address"
//                   required
//                 />
//               </div>
//               <div className="user-input-box">
//                 <label htmlFor="contactNumber">Contact Number</label>
//                 <input
//                   type="text"
//                   id="contactNumber"
//                   name="contactNumber"
//                   value={formData.contactNumber}
//                   onChange={handleChange}
//                   placeholder="Enter Contact Number"
//                   required
//                 />
//               </div>
//               <div className="user-input-box">
//                 <label htmlFor="storeHours">Store Hours</label>
//                 <input
//                   type="text"
//                   id="storeHours"
//                   name="storeHours"
//                   value={formData.storeHours}
//                   onChange={handleChange}
//                   placeholder="Enter Store Hours"
//                   required
//                 />
//               </div>
//               <div className="user-input-box">
//                 <label htmlFor="storeImage">Store Image</label>
//                 <input
//                   type="file"
//                   id="storeImage"
//                   name="storeImage"
//                   onChange={handleFileChange}
//                   required
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="form-submit-btn">
//             <input type="submit" value="Register" />
//           </div>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default RegistrationForm;

// import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import './RegistrationForm.css'; // Import custom CSS file for styling

// const RegistrationForm = ({ onClose }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     storeName: '',
//     storeAddress: '',
//     contactNumber: '',
//     storeHours: '',
//     storeImage: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, storeImage: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataToSend = new FormData();
//       Object.entries(formData).forEach(([key, value]) => {
//         formDataToSend.append(key, value);
//       });

//       const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/Adminregister', {
//         method: 'POST',
//         body: formDataToSend
//       });

//       if (response.ok) {
//         const data = await response.json();
//         const adminId = data._id;
//         localStorage.setItem('adminId', adminId);
//         navigate(`/adminhome?adminId=${adminId}`);
//         toast.success('Registration successful');
//       } else {
//         const errorData = await response.json();
//         toast.error(errorData.error);
//       }
//     } catch (error) {
//       console.error(error.message);
//       toast.error(error.message);
//     }
//   };

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <div className="popup-container">
//       <div className="popup-box">
//         <span className="close" onClick={handleClose}>&times;</span>
//         <h1 className="form-title">Registration</h1>
//         <form onSubmit={handleSubmit} className="registration-form">
//           <div className="form-row">
//             <div className="form-col">
//               <div className="user-input-box">
//                 <label htmlFor="fullName">Full Name</label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter Full Name"
//                   required
//                 />
//               </div>
//               <div className="user-input-box">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter Email"
//                   required
//                 />
//               </div>
//               <div className="user-input-box">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Enter Password"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="form-col">
//               <div className="user-input-box">
//                 <label htmlFor="storeName">Store Name</label>
//                 <input
//                   type="text"
//                   id="storeName"
//                   name="storeName"
//                   value={formData.storeName}
//                   onChange={handleChange}
//                   placeholder="Enter Store Name"
//                   required
//                 />
//               </div>
//               <div className="user-input-box">
//                 <label htmlFor="storeAddress">Store Address</label>
//                 <input
//                   type="text"
//                   id="storeAddress"
//                   name="storeAddress"
//                   value={formData.storeAddress}
//                   onChange={handleChange}
//                   placeholder="Enter Store Address"
//                   required
//                 />
//               </div>
//               <div className="user-input-box">
//                 <label htmlFor="contactNumber">Contact Number</label>
//                 <input
//                   type="text"
//                   id="contactNumber"
//                   name="contactNumber"
//                   value={formData.contactNumber}
//                   onChange={handleChange}
//                   placeholder="Enter Contact Number"
//                   required
//                 />
//               </div>
//               <div className="user-input-box">
//                 <label htmlFor="storeHours">Store Hours</label>
//                 <input
//                   type="text"
//                   id="storeHours"
//                   name="storeHours"
//                   value={formData.storeHours}
//                   onChange={handleChange}
//                   placeholder="Enter Store Hours"
//                   required
//                 />
//               </div>
//               <div className="user-input-box">
//                 <label htmlFor="storeImage">Store Image</label>
//                 <input
//                   type="file"
//                   id="storeImage"
//                   name="storeImage"
//                   onChange={handleFileChange}
//                   required
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="form-submit-btn">
//             <input type="submit" value="Register" />
//           </div>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default RegistrationForm;

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css'; // Import custom CSS file for styling

const RegistrationForm = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    storeName: '',
    storeAddress: '',
    contactNumber: '',
    storeHours: '',
    storeImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, storeImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/Adminregister', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        const data = await response.json();
        const adminId = data._id;
        localStorage.setItem('adminId', adminId);
        navigate(`/adminhome?adminId=${adminId}`);
        toast.success('Registration successful');
      } else {
        const errorData = await response.json();
        toast.error(errorData.error);
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="popup-container">
      <div className="popup-box">
        <span className="close" onClick={handleClose}>&times;</span>
        <h1 className="form-title">Registration</h1>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-row">
            <div className="user-input-box">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="storeName">Store Name</label>
              <input
                type="text"
                id="storeName"
                name="storeName"
                value={formData.storeName}
                onChange={handleChange}
                placeholder="Enter Store Name"
                required
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="storeAddress">Store Address</label>
              <input
                type="text"
                id="storeAddress"
                name="storeAddress"
                value={formData.storeAddress}
                onChange={handleChange}
                placeholder="Enter Store Address"
                required
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter Contact Number"
                required
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="storeHours">Store Hours</label>
              <input
                type="text"
                id="storeHours"
                name="storeHours"
                value={formData.storeHours}
                onChange={handleChange}
                placeholder="Enter Store Hours"
                required
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="storeImage">Store Image</label>
              <input
                type="file"
                id="storeImage"
                name="storeImage"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>
          <div className="form-submit-btn">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;











