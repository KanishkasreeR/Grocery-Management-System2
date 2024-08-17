import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Navbar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [adminId, setAdminId] = useState(""); 
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();


  const handleInputChange = (event) => {
    setSearchQuery(event.target.value); 
  };

  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    handleSearch(searchQuery);
  };

  useEffect(() => {
    const adminIdFromParams = searchParams.get("adminId");
    if (adminIdFromParams) {
    
      localStorage.setItem("adminId", adminIdFromParams);
      setAdminId(adminIdFromParams);
    } else {
      const storedAdminId = localStorage.getItem("adminId");
      if (storedAdminId) {
        setAdminId(storedAdminId);
      }
    }
  }, [searchParams]);

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="navbar-brand">Admin Panel</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
          aria-controls="adminNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="adminNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to={`/adminhome?adminId=${adminId}`}
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`/addproduct?adminId=${adminId}`}
                className="nav-link"
              >
                Add Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`/orderhistory?adminId=${adminId}`}
                className="nav-link"
              >
                Order History
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-link nav-link"
                onClick={() => {
                  localStorage.removeItem("adminId");
                  setAdminId("");
                  navigate("/");
                }}
              >
                Log Out
              </button>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



