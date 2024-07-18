// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";

// const UserNavbar = ({ handleSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [adminId, setAdminId] = useState(""); // State to hold adminId
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   // Function to handle input change in the search input field
//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value); // Update search query state
//   };

//   // Function to handle search form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     handleSearch(searchQuery);
//   };

//   useEffect(() => {
//     const adminIdFromParams = searchParams.get("adminId");
//     if (adminIdFromParams) {
//       // Update local storage
//       localStorage.setItem("adminId", adminIdFromParams);
//       // Update state
//       setAdminId(adminIdFromParams);
//     } else {
//       // Get adminId from local storage
//       const storedAdminId = localStorage.getItem("adminId");
//       if (storedAdminId) {
//         // Update state with stored adminId
//         setAdminId(storedAdminId);
//       }
//     }
//   }, [searchParams]);

//   return (
//     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
//       <div className="container-fluid">
//         <span className="navbar-brand">User Panel</span>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#adminNavbar"
//           aria-controls="adminNavbar"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="adminNavbar">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link
//                 to={`/customerhome?adminId=${adminId}`}
//                 className="nav-link"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to={`/addproduct?adminId=${adminId}`}
//                 className="nav-link"
//               >
//                 Wishlist
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to={`/admin/orderhistory?adminId=${adminId}`}
//                 className="nav-link"
//               >
//                 Cart
//               </Link>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="btn btn-link nav-link"
//                 onClick={() => {
//                   // Clear adminId from local storage and state on logout
//                   localStorage.removeItem("adminId");
//                   setAdminId("");
//                   // Navigate to login or home page
//                   navigate("/");
//                 }}
//               >
//                 Log Out
//               </button>
//             </li>
//           </ul>
//           <form className="d-flex" onSubmit={handleSubmit}>
//             <input
//               className="form-control me-sm-2"
//               type="search"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={handleInputChange}
//             />
//             <button className="btn btn-secondary my-2 my-sm-0" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default UserNavbar;

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";

// const UserNavbar = ({ handleSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [customerId, setCustomerId] = useState(""); // State to hold customerId
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   // Function to handle input change in the search input field
//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value); // Update search query state
//   };

//   // Function to handle search form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     handleSearch(searchQuery);
//   };

//   useEffect(() => {
//     const customerIdFromParams = searchParams.get("customerId");
//     if (customerIdFromParams) {
//       // Update local storage
//       localStorage.setItem("customerId", customerIdFromParams);
//       // Update state
//       setCustomerId(customerIdFromParams);
//     } else {
//       // Get customerId from local storage
//       const storedCustomerId = localStorage.getItem("customerId");
//       if (storedCustomerId) {
//         // Update state with stored customerId
//         setCustomerId(storedCustomerId);
//       }
//     }
//   }, [searchParams]);

//   return (
//     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
//       <div className="container-fluid">
//         <span className="navbar-brand">User Panel</span>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#adminNavbar"
//           aria-controls="adminNavbar"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="adminNavbar">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link
//                 to={`/customerhome?customerId=${customerId}`}
//                 className="nav-link"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to={`/wishlist?customerId=${customerId}`}
//                 className="nav-link"
//               >
//                 Wishlist
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to={`/admin/orderhistory?customerId=${customerId}`}
//                 className="nav-link"
//               >
//                 Cart
//               </Link>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="btn btn-link nav-link"
//                 onClick={() => {
//                   // Clear customerId from local storage and state on logout
//                   localStorage.removeItem("customerId");
//                   setCustomerId("");
//                   // Navigate to login or home page
//                   navigate("/");
//                 }}
//               >
//                 Log Out
//               </button>
//             </li>
//           </ul>
//           <form className="d-flex" onSubmit={handleSubmit}>
//             <input
//               className="form-control me-sm-2"
//               type="search"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={handleInputChange}
//             />
//             <button className="btn btn-secondary my-2 my-sm-0" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default UserNavbar;

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";

// const UserNavbar = ({ handleSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [customerId, setCustomerId] = useState(""); // State to hold customerId
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   // Function to handle input change in the search input field
//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value); // Update search query state
//   };

//   // Function to handle search form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     handleSearch(searchQuery);
//   };

//   useEffect(() => {
//     const customerIdFromParams = searchParams.get("customerId");
//     if (customerIdFromParams) {
//       // Update local storage
//       localStorage.setItem("customerId", customerIdFromParams);
//       // Update state
//       setCustomerId(customerIdFromParams);
//     } else {
//       // Get customerId from local storage
//       const storedCustomerId = localStorage.getItem("customerId");
//       if (storedCustomerId) {
//         // Update state with stored customerId
//         setCustomerId(storedCustomerId);
//       }
//     }
//   }, [searchParams]);

//   return (
//     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
//       <div className="container-fluid">
//         <span className="navbar-brand">User Panel</span>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#adminNavbar"
//           aria-controls="adminNavbar"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="adminNavbar">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link
//                 to={`/customerhome?customerId=${customerId}`}
//                 className="nav-link"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to={`/wishlist?customerId=${customerId}`}
//                 className="nav-link"
//               >
//                 Wishlist
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to={`/cart?customerId=${customerId}`}
//                 className="nav-link"
//               >
//                 Cart
//               </Link>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="btn btn-link nav-link"
//                 onClick={() => {
//                   // Clear customerId from local storage and state on logout
//                   localStorage.removeItem("customerId");
//                   setCustomerId("");
//                   // Navigate to login or home page
//                   navigate("/");
//                 }}
//               >
//                 Log Out
//               </button>
//             </li>
//           </ul>
//           {/* Search Form */}
//           <form className="d-flex" onSubmit={handleSubmit}>
//             <input
//               className="form-control me-sm-2"
//               type="search"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={handleInputChange}
//             />
//             <button className="btn btn-secondary my-2 my-sm-0" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default UserNavbar;

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, useSearchParams } from "react-router-dom";

const UserNavbar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [customerId, setCustomerId] = useState(""); // State to hold customerId
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Function to handle input change in the search input field
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value); // Update search query state
  };

  // Function to handle search form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    handleSearch(searchQuery);
  };

  useEffect(() => {
    const customerIdFromParams = searchParams.get("customerId");
    if (customerIdFromParams) {
      // Update local storage
      localStorage.setItem("customerId", customerIdFromParams);
      // Update state
      setCustomerId(customerIdFromParams);
    } else {
      // Get customerId from local storage
      const storedCustomerId = localStorage.getItem("customerId");
      if (storedCustomerId) {
        // Update state with stored customerId
        setCustomerId(storedCustomerId);
      }
    }
  }, [searchParams]);

  // Check if the current location matches the products page route
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
                  // Clear customerId from local storage and state on logout
                  localStorage.removeItem("customerId");
                  setCustomerId("");
                  // Navigate to login or home page
                  navigate("/");
                }}
              >
                Log Out
              </button>
            </li>
          </ul>
          {/* Render search form only on products page */}
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

