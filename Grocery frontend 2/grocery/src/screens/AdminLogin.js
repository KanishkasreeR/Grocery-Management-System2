// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AdminLogin = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("https://grocery-management-system-backend-7.onrender.com/api/Adminlogin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         const { token, admin } = await response.json();
//         localStorage.setItem('adminToken', token);
//         localStorage.setItem('adminData', JSON.stringify(admin));
//         toast.success('Login successful');
//         navigate(`/adminhome?adminId=${admin._id}`);// Redirect to admin profile page with adminId as URL parameter
//       } else {
//         const errorData = await response.json();
//         toast.error(errorData.error);
//       }
//     } catch (error) {
//       console.error("Failed to log in:", error);
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AdminLogin;

// import React, { useState } from 'react';
// import './UserLogin.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

// const AdminLogin = ({ onClose }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     error: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/Adminlogin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       // if (!response.ok) {
//       //   throw new Error(data.error || 'Login failed');
//       // }

//       // console.log(data);
//       if (response.ok) {
//                 const { token, admin } = await response.json();
//                 localStorage.setItem('adminToken', token);
//                 localStorage.setItem('adminData', JSON.stringify(admin));
//                 toast.success('Login successful');
//                 navigate(`/adminhome?adminId=${admin._id}`);// Redirect to admin profile page with adminId as URL parameter
//               } else {
//                 const errorData = await response.json();
//                 toast.error(errorData.error);
//               }
//       // Handle success, maybe store token in local storage, close the popup, or redirect
//     } catch (error) {
//       setFormData({ ...formData, error: error.message });
//     }
//   };

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <ToastContainer>
//     <div className="popup">
//       <div className="popup-inner">
//         <button className="close-btn" onClick={handleClose}>X</button>
//         <h2>Admin Login</h2>
//         {formData.error && <p className="error">{formData.error}</p>}
//         <form onSubmit={handleSubmit}>
//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//     </ToastContainer>
//   );
// };

// export default AdminLogin;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './UserLogin.css';

// const AdminLoginPopup = ({ onClose }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     error: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/Adminlogin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       // const data = await response.json();

//       if (response.ok) {
//         const { token, admin } = await response.json();
//         localStorage.setItem('adminToken', token);
//         localStorage.setItem('adminData', JSON.stringify(admin));
//         navigate(`/adminhome?adminId=${admin._id}`);
        
//       } else {
//         throw new Error('Login failed');
//       }
//     } catch (error) {
//       setFormData({ ...formData, error: error.message });
//     }
//   };

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <div className="popup">
//       <div className="popup-inner">
//         <button className="close-btn" onClick={handleClose}>X</button>
//         <h2>Admin Login</h2>
//         {formData.error && <p className="error">{formData.error}</p>}
//         <form onSubmit={handleSubmit}>
//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLoginPopup;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './UserLogin.css';

// const AdminLoginPopup = ({ onClose }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     error: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/Adminlogin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
        // const { token, admin } = await response.json();
        // localStorage.setItem('adminToken', token);
        // localStorage.setItem('adminData', JSON.stringify(admin));
        // navigate(`/adminhome?adminId=${admin._id}`);
//       } else {
//         throw new Error('Login failed');
//       }
//     } catch (error) {
//       setFormData({ ...formData, error: error.message });
//     }
//   };

//   const handleForgotPassword = () => {
//     navigate(`/forgot-password`);
//   };

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <div className="popup">
//       <div className="popup-inner">
//         <button className="close-btn" onClick={handleClose}>X</button>
//         <h2>Admin Login</h2>
//         {formData.error && <p className="error">{formData.error}</p>}
//         <form onSubmit={handleSubmit}>
//           <input 
//             type="email" 
//             name="email" 
//             placeholder="Email" 
//             value={formData.email} 
//             onChange={handleChange} 
//           />
//           <input 
//             type="password" 
//             name="password" 
//             placeholder="Password" 
//             value={formData.password} 
//             onChange={handleChange} 
//           />
//           <p className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</p>
//           <button type="submit">Login</button>
//         </form>
        
//       </div>
//     </div>
//   );
// };

// export default AdminLoginPopup;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import './UserLogin.css';

// const AdminLoginPopup = ({ onClose }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     error: ''
//   });
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [resetToken, setResetToken] = useState('');
//   const [confirmPasswordMode, setConfirmPasswordMode] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'confirmPassword') {
//       setConfirmPassword(value);
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (!confirmPasswordMode) {
//         const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/Adminlogin', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(formData)
//         });

//         if (response.ok) {
//         const { token, admin } = await response.json();
//         localStorage.setItem('adminToken', token);
//         localStorage.setItem('adminData', JSON.stringify(admin));
//         navigate(`/adminhome?adminId=${admin._id}`);
//         } else {
//           throw new Error('Login failed');
//         }
//       } else {
//         // Request a reset token
//         const tokenResponse = await fetch('https://grocery-management-system-backend-7.onrender.com/api/forgot-password', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ email: formData.email })
//         });

//         if (tokenResponse.ok) {
//           const data = await tokenResponse.json();
//           setResetToken(data.resetToken);
//           console.log(resetToken);  // Store the token

//           // Use the stored reset token to reset the password
//           const resetResponse = await fetch('https://grocery-management-system-backend-7.onrender.com/api/reset-password', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ token: data.resetToken, password: confirmPassword }) // Use data.resetToken here
//           });

//           if (resetResponse.ok) {
//             setFormData({ email: '', password: '', error: '' });
//             setConfirmPassword('');
//             setResetToken('');
//             setConfirmPasswordMode(false);
//             // alert('Password has been reset. Please login with your new password.');
//           } else {
//             throw new Error('Password reset failed');
//           }
//         } else {
//           throw new Error('Error generating reset token');
//         }
//       }
//     } catch (error) {
//       setFormData({ ...formData, error: error.message });
//     }
//   };

//   const handleForgotPassword = async () => {
//     setShowPassword(false);
//     setConfirmPassword('');
//     setResetToken('');
//     setConfirmPasswordMode(true);
//   };

//   const handleBackToLogin = () => {
//     setShowPassword(false);
//     setFormData({ email: '', password: '', error: '' });
//     setConfirmPassword('');
//     setResetToken('');
//     setConfirmPasswordMode(false);
//   };

//   const handleClose = () => {
//     onClose();
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="popup">
//       <div className="popup-inner">
//         <button className="close-btn" onClick={handleClose}>X</button>
//         <h2>{!confirmPasswordMode ? 'Admin Login' : 'Forgot Password'}</h2>
//         {formData.error && <p className="error">{formData.error}</p>}
//         <form onSubmit={handleSubmit}>
//           <input 
//             type="email" 
//             name="email" 
//             placeholder="Email" 
//             value={formData.email} 
//             onChange={handleChange} 
//             required 
//           />
//           {!confirmPasswordMode && ( // Render only if not in confirm password mode
//             <div className="password-input-container">
//               <input 
//                 type={showPassword ? 'text' : 'password'} 
//                 name="password" 
//                 placeholder="Password" 
//                 value={formData.password} 
//                 onChange={handleChange} 
//               />
//               <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
//                 <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//               </span>
//             </div>
//           )}
//           {confirmPasswordMode && ( // Render confirm password input if in confirm password mode
//             <>
//               <input 
//                 type="password" 
//                 name="confirmPassword" 
//                 placeholder="New Password" 
//                 value={confirmPassword} 
//                 onChange={handleChange} 
//                 required 
//               />
//             </>
//           )}
//           <p className="forgot-password" onClick={confirmPasswordMode ? handleBackToLogin : handleForgotPassword}>
//             {!confirmPasswordMode ? 'Forgot Password?' : 'Back to Login'}
//           </p>
//           <button type="submit">{!confirmPasswordMode ? 'Login' : 'Confirm'}</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLoginPopup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './UserLogin.css';

const AdminLoginPopup = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    error: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [confirmPasswordMode, setConfirmPasswordMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!confirmPasswordMode) {
        const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/Adminlogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          const { token, admin } = await response.json();
          localStorage.setItem('adminToken', token);
          localStorage.setItem('adminData', JSON.stringify(admin));
          navigate(`/adminhome?adminId=${admin._id}`);
        } else {
          // throw new Error('Login failed');
          const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
        }
      } else {
        const tokenResponse = await fetch('https://grocery-management-system-backend-7.onrender.com/api/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: formData.email })
        });

        if (tokenResponse.ok) {
          const data = await tokenResponse.json();
          setResetToken(data.resetToken);
          console.log(resetToken);  // Store the token

          const resetResponse = await fetch('https://grocery-management-system-backend-7.onrender.com/api/reset-password', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: data.resetToken, password: confirmPassword }) // Use data.resetToken here
          });

          if (resetResponse.ok) {
            setFormData({ email: '', password: '', error: '' });
            setConfirmPassword('');
            setResetToken('');
            setConfirmPasswordMode(false);
            // alert('Password has been reset. Please login with your new password.');
          } else {
            throw new Error('Password reset failed');
          }
        } else {
          throw new Error('Error generating reset token');
        }
      }
    } catch (error) {
      setFormData({ ...formData, error: error.message });
    }
  };

  const handleForgotPassword = async () => {
    setShowPassword(false);
    setShowConfirmPassword(false); // Reset confirm password visibility
    setConfirmPassword('');
    setResetToken('');
    setConfirmPasswordMode(true);
  };

  const handleBackToLogin = () => {
    setShowPassword(false);
    setShowConfirmPassword(false); // Reset confirm password visibility
    setFormData({ email: '', password: '', error: '' });
    setConfirmPassword('');
    setResetToken('');
    setConfirmPasswordMode(false);
  };

  const handleClose = () => {
    onClose();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={handleClose}>X</button>
        <h2>{!confirmPasswordMode ? 'Admin Login' : 'Forgot Password'}</h2>
        {formData.error && <p className="error">{formData.error}</p>}
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          {!confirmPasswordMode && ( // Render only if not in confirm password mode
            <div className="password-input-container">
              <input 
                type={showPassword ? 'text' : 'password'} 
                name="password" 
                placeholder="Password" 
                value={formData.password} 
                onChange={handleChange} 
              />
              <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          )}
          {confirmPasswordMode && ( // Render confirm password input if in confirm password mode
            <div className="password-input-container">
              <input 
                type={showConfirmPassword ? 'text' : 'password'} 
                name="confirmPassword" 
                placeholder="New Password" 
                value={confirmPassword} 
                onChange={handleChange} 
                required 
              />
              <span className="password-toggle-icon" onClick={toggleConfirmPasswordVisibility}>
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          )}
          <p className="forgot-password" onClick={confirmPasswordMode ? handleBackToLogin : handleForgotPassword}>
            {!confirmPasswordMode ? 'Forgot Password?' : 'Back to Login'}
          </p>
          <button type="submit">{!confirmPasswordMode ? 'Login' : 'Confirm'}</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPopup;







