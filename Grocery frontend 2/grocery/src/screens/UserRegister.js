// import React, { useState } from 'react';
// import './UserRegister.css'

// const UserRegisterPopup = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     contactNumber: '',
//     address: '',
//     error: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/UserRegister', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       const data = await response.json();
//       console.log(data);
//       // Handle success, maybe close the popup or show a success message
//     } catch (error) {
//       setFormData({ ...formData, error: 'Internal server error' });
//     }
//   };

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <div className="popup">
//       <div className="popup-inner">
//         <button className="close-btn" onClick={handleClose}>X</button>
//         <h2>Register</h2>
//         {formData.error && <p className="error">{formData.error}</p>}
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
//           <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} />
//           <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserRegisterPopup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './UserRegister.css';

const UserRegisterPopup = ({ onClose }) => {
  const navigate = useNavigate(); // Get navigate function
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contactNumber: '',
    address: '',
    error: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://grocery-management-system-backend-7.onrender.com/api/UserRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // If registration is successful, navigate to customer home page with customer ID as query parameter
        localStorage.setItem('customerId', data._id);
        navigate(`/customerhome?customerId=${data._id}`);
      } else {
        setFormData({ ...formData, error: data.error || 'Internal server error' });
      }
    } catch (error) {
      setFormData({ ...formData, error: 'Internal server error' });
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={handleClose}>X</button>
        <h2>Register</h2>
        {formData.error && <p className="error">{formData.error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default UserRegisterPopup;

