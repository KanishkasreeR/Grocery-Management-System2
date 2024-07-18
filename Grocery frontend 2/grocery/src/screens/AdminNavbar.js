// import React, { useState } from "react";
// import { Link, useParams } from "react-router-dom";

// const Navbar = ({ handleSearch, adminId }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const admin = adminId;
//   console.log('navbar admin id: ' + admin)

//   // Function to handle input change in the search input field
//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value); // Update search query state
//   };

//   // Function to handle search form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     handleSearch(searchQuery);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
//       <div className="container-fluid">
//         <span className="navbar-brand">Admin Panel</span>
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
//               <Link to={`/adminhome?adminId=${admin}`} className="nav-link">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/addproduct?adminId=${admin}`} className="nav-link">
//                 Add Product
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/admin/remove-product?adminId=${admin}`} className="nav-link">
//                 Remove Product
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/admin/edit-product?adminId=${adminId}`} className="nav-link">
//                 Edit Product
//               </Link>
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
//             <button
//               className="btn btn-secondary my-2 my-sm-0"
//               type="submit"
//             >
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";

// const Navbar = ({ handleSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const { adminId: adminIdFromParams } = useParams(); // Get adminId from URL params
//   const [adminId, setAdminId] = useState(""); // State to hold adminId

//   // Function to handle input change in the search input field
//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value); // Update search query state
//   };

//   // Function to handle search form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     handleSearch(searchQuery);
//   };

//   // Effect to update adminId in local storage and state when adminId changes
//   useEffect(() => {
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
//   }, [adminIdFromParams]);
//   console.log("navbar" + adminIdFromParams)

//   return (
//     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
//       <div className="container-fluid">
//         <span className="navbar-brand">Admin Panel</span>
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
//               <Link to={`/adminhome?adminId=${adminId}`} className="nav-link">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/addproduct?adminId=${adminId}`} className="nav-link">
//                 Add Product
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/admin/orderhistory?adminId=${adminId}`} className="nav-link">
//                 Order History
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/`} className="nav-link">
//                 Log Out
//               </Link>
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
//             <button
//               className="btn btn-secondary my-2 my-sm-0"
//               type="submit"
//             >
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


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



// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";

// const Navbar = ({ handleSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [adminId, setAdminId] = useState(""); // State to store adminId

//   // Function to handle input change in the search input field
//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value); // Update search query state
//   };

//   // Function to handle search form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     handleSearch(searchQuery);
//   };

//   // Effect to retrieve adminId from localStorage on component mount
//   useEffect(() => {
//     const storedAdminId = localStorage.getItem('adminId');
//     if (storedAdminId) {
//       setAdminId(storedAdminId);
//     }
//   }, []);

//   return (
//     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
//       <div className="container-fluid">
//         <span className="navbar-brand">Admin Panel</span>
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
//               <Link to={`/adminhome?adminId=${adminId}`} className="nav-link">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/addproduct?adminId=${adminId}`} className="nav-link">
//                 Add Product
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/admin/remove-product?adminId=${adminId}`} className="nav-link">
//                 Remove Product
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/admin/edit-product?adminId=${adminId}`} className="nav-link">
//                 Edit Product
//               </Link>
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
//             <button
//               className="btn btn-secondary my-2 my-sm-0"
//               type="submit"
//             >
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = ({ handleSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [adminId, setAdminId] = useState(""); // State to store adminId
//   const location = useLocation();

//   // Function to handle input change in the search input field
//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value); // Update search query state
//   };

//   // Function to handle search form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     handleSearch(searchQuery);
//   };

//   // Effect to retrieve adminId from localStorage on component mount
//   useEffect(() => {
//     const storedAdminId = localStorage.getItem('adminId');
//     if (storedAdminId) {
//       setAdminId(storedAdminId);
//     }
//   }, []);

//   // Conditionally render search form based on current route
//   const renderSearchForm = () => {
//     // Check if current route is the home page
//     if (location.pathname === '/adminhome') {
//       return (
//         <form className="d-flex" onSubmit={handleSubmit}>
//           <input
//             className="form-control me-sm-2"
//             type="search"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={handleInputChange}
//           />
//           <button
//             className="btn btn-secondary my-2 my-sm-0"
//             type="submit"
//           >
//             Search
//           </button>
//         </form>
//       );
//     }
//   };
//   console.log("Navbar: " + adminId)

//   return (
//     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
//       <div className="container-fluid">
//         <span className="navbar-brand">Admin Panel</span>
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
//               <Link to={`/adminhome?adminId=${adminId}`} className="nav-link">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/addproduct?adminId=${adminId}`} className="nav-link">
//                 Add Product
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/admin/order-history?adminId=${adminId}`} className="nav-link">
//                 Order History
//               </Link>
//             </li>
//             {/* <li className="nav-item">
//               <Link to={`/adminprofile?adminId=${adminId}`} className="nav-link">
//                 Profile
//               </Link>
//             </li> */}
//             <li className="nav-item">
//               <Link to={`/`} className="nav-link">
//                 Log Out
//               </Link>
//             </li>
//           </ul>
//           {renderSearchForm()} {/* Render search form based on current route */}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = ({ handleSearch, adminId }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const location = useLocation();

//   // Function to handle input change in the search input field
//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value); // Update search query state
//   };

//   // Function to handle search form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     handleSearch(searchQuery);
//   };

//   // Conditionally render search form based on current route
//   const renderSearchForm = () => {
//     // Check if current route is the home page
//     if (location.pathname === '/adminhome') {
//       return (
//         <form className="d-flex" onSubmit={handleSubmit}>
//           <input
//             className="form-control me-sm-2"
//             type="search"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={handleInputChange}
//           />
//           <button
//             className="btn btn-secondary my-2 my-sm-0"
//             type="submit"
//           >
//             Search
//           </button>
//         </form>
//       );
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
//       <div className="container-fluid">
//         <span className="navbar-brand">Admin Panel</span>
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
//               <Link to={`/adminhome?adminId=${adminId}`} className="nav-link">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/addproduct?adminId=${adminId}`} className="nav-link">
//                 Add Product
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/admin/order-history?adminId=${adminId}`} className="nav-link">
//                 Order History
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/`} className="nav-link">
//                 Log Out
//               </Link>
//             </li>
//           </ul>
//           {renderSearchForm()} {/* Render search form based on current route */}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useParams } from "react-router-dom";

// const Navbar = ({ handleSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const location = useLocation();
//   const { adminId } = useParams(); // Extract adminId from URL params

//   // Function to handle input change in the search input field
//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value); // Update search query state
//   };

//   // Function to handle search form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     handleSearch(searchQuery);
//   };

//   // Conditionally render search form based on current route
//   const renderSearchForm = () => {
//     // Check if current route is the home page
//     if (location.pathname === '/adminhome') {
//       return (
//         <form className="d-flex" onSubmit={handleSubmit}>
//           <input
//             className="form-control me-sm-2"
//             type="search"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={handleInputChange}
//           />
//           <button
//             className="btn btn-secondary my-2 my-sm-0"
//             type="submit"
//           >
//             Search
//           </button>
//         </form>
//       );
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
//       <div className="container-fluid">
//         <span className="navbar-brand">Admin Panel</span>
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
//               <Link to={`/adminhome?adminId=${adminId}`} className="nav-link">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/addproduct?adminId=${adminId}`} className="nav-link">
//                 Add Product
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/admin/order-history?adminId=${adminId}`} className="nav-link">
//                 Order History
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={`/`} className="nav-link">
//                 Log Out
//               </Link>
//             </li>
//           </ul>
//           {renderSearchForm()} {/* Render search form based on current route */}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


