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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
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
          console.log(resetToken);

          const resetResponse = await fetch('https://grocery-management-system-backend-7.onrender.com/api/reset-password', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: data.resetToken, password: confirmPassword }) 
          });

          if (resetResponse.ok) {
            setFormData({ email: '', password: '', error: '' });
            setConfirmPassword('');
            setResetToken('');
            setConfirmPasswordMode(false);
            
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
    setShowConfirmPassword(false); 
    setConfirmPassword('');
    setResetToken('');
    setConfirmPasswordMode(true);
  };

  const handleBackToLogin = () => {
    setShowPassword(false);
    setShowConfirmPassword(false);
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
          {!confirmPasswordMode && ( 
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
          {confirmPasswordMode && (
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







