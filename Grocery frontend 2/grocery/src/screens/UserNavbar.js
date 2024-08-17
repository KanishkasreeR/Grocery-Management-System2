import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, useSearchParams } from "react-router-dom";

const UserNavbar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [customerId, setCustomerId] = useState(""); 
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    handleSearch(searchQuery);
  };

  useEffect(() => {
    const customerIdFromParams = searchParams.get("customerId");
    if (customerIdFromParams) {
      localStorage.setItem("customerId", customerIdFromParams);
      setCustomerId(customerIdFromParams);
    } else {
      const storedCustomerId = localStorage.getItem("customerId");
      if (storedCustomerId) {
        setCustomerId(storedCustomerId);
      }
    }
  }, [searchParams]);
  const isProductsPage = location.pathname === "/products";

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="navbar-brand">User Panel</span>
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
                to={`/customerhome?customerId=${customerId}`}
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`/wishlist?customerId=${customerId}`}
                className="nav-link"
              >
                Wishlist
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`/cart?customerId=${customerId}`}
                className="nav-link"
              >
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`/userorder?customerId=${customerId}`}
                className="nav-link"
              >
                Order History
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-link nav-link"
                onClick={() => {
                  localStorage.removeItem("customerId");
                  setCustomerId("");
                  navigate("/");
                }}
              >
                Log Out
              </button>
            </li>
          </ul>
          {isProductsPage && (
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
          )}
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;

