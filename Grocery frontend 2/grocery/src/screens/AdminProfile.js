import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./AdminNavbar";

const Profile = () => {
  const { adminId } = useParams();
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State to manage the edited profile data
  const [editedAdmin, setEditedAdmin] = useState(null);

  useEffect(() => {
    // Check if admin ID is stored in local storage
    const storedAdminId = localStorage.getItem("adminId");

    if (storedAdminId) {
      fetchAdminDetails(storedAdminId);
    } else {
      fetchAdminDetails(adminId);
    }
  }, [adminId]);

  const fetchAdminDetails = async (id) => {
    try {
      const response = await fetch(`https://grocery-management-system-backend-1.onrender.com/api/admin?adminId=${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch admin details');
      }
      const data = await response.json();
      setAdmin(data.admin);
      // Initialize editedAdmin with fetched admin data
      setEditedAdmin(data.admin);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAdmin({
      ...editedAdmin,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/admin/edit/${adminId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedAdmin),
      });
      if (!response.ok) {
        throw new Error('Failed to update admin details');
      }
      // Update the admin state with the edited data
      setAdmin(editedAdmin);
      // Reset editedAdmin state
      setEditedAdmin(null);
    } catch (error) {
      console.error('Error updating admin details:', error);
      setError('Failed to update admin details');
    }
  };

  useEffect(() => {
    // Store admin ID locally
    localStorage.setItem("adminId", adminId);
  }, [adminId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
        <Navbar/>
      {admin && (
        <div>
          <h2>Profile Details</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={editedAdmin.name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={editedAdmin.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="storeName">Store Name:</label>
              <input type="text" id="storeName" name="storeName" value={editedAdmin.storeName} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="storeImage">Store Image:</label>
              <input type="file" id="storeImage" name="storeImage" accept="image/*" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="storeHours">Store Hours:</label>
              <input type="text" id="storeHours" name="storeHours" value={editedAdmin.storeHours} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="storeAddress">Store Address:</label>
              <input type="text" id="storeAddress" name="storeAddress" value={editedAdmin.storeAddress} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="contactNumber">Contact Number:</label>
              <input type="tel" id="contactNumber" name="contactNumber" value={editedAdmin.contactNumber} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="bio">Bio:</label>
              <textarea id="bio" name="bio" value={editedAdmin.bio} onChange={handleChange} />
            </div>
            <div>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
