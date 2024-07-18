// import React, { useState } from 'react';
// import RegistrationForm from './AdminRegister';

// const HomePage = () => {
//   const [showRegistration, setShowRegistration] = useState(false);

//   const openRegistration = () => {
//     setShowRegistration(true);
//   };

//   return (
//     <div>
//       <h1>Welcome to Our Website</h1>
//       <p>Explore our services and products.</p>
//       <button onClick={openRegistration}>Register</button>
//       {showRegistration && <RegistrationForm onClose={() => setShowRegistration(false)} />}
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState } from 'react';
// import RegistrationForm from './AdminRegister'; // Import the correct component

// const HomePage = () => {
//   const [showRegistration, setShowRegistration] = useState(false);

//   const openRegistration = () => {
//     setShowRegistration(true);
//   };

//   return (
//     <div>
//       <h1>Welcome to Our Website</h1>
//       <p>Explore our services and products.</p>
//       <button onClick={openRegistration}>Register</button>
//       {showRegistration && <RegistrationForm onClose={() => setShowRegistration(false)} />}
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState } from 'react';
// import AdminLogin from './AdminLogin'; // Import the AdminLogin component
// import RegistrationForm from './AdminRegister'; // Import the RegistrationForm component

// const HomePage = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegistration, setShowRegistration] = useState(false);

//   const openLogin = () => {
//     setShowLogin(true);
//     setShowRegistration(false); // Ensure only login modal is open
//   };

//   const openRegistration = () => {
//     setShowRegistration(true);
//     setShowLogin(false); // Ensure only registration modal is open
//   };

//   return (
//     <div>
//       <h1>Welcome to Our Website</h1>
//       <p>Explore our services and products.</p>
//       <div>
//         <button onClick={openLogin}>Login</button>
//         <button onClick={openRegistration}>Register</button>
//       </div>
//       {showLogin && <AdminLogin onClose={() => setShowLogin(false)} />}
//       {showRegistration && <RegistrationForm onClose={() => setShowRegistration(false)} />}
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState } from 'react';
// import AdminLogin from './AdminLogin'; // Import the AdminLogin component
// import RegistrationForm from './AdminRegister'; // Import the RegistrationForm component

// const HomePage = () => {
//   const [showModal, setMshowModal] = useState(false);
//   const [showRegistration, setShowRegistration] = useState(false);

//   const openLogin = () => {
//     setMshowModal(true);
//     setShowRegistration(false); // Ensure only login modal is open
//   };

//   const openRegistration = () => {
//     setShowRegistration(true);
//     setMshowModal(false); // Ensure only registration modal is open
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
//         <div className="container-fluid justify-content-between"> {/* Changed */}
//           <a className="navbar-brand" href="#">Our Website</a>
//           <div className="d-flex"> {/* Changed */}
//             <ul className="navbar-nav me-auto">
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownAdmin" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Admin
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdownAdmin">
//                   <li><button className="dropdown-item" onClick={openLogin}>Login</button></li>
//                   <li><button className="dropdown-item" onClick={openRegistration}>Register</button></li>
//                 </ul>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownCustomer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Customer
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdownCustomer">
//                   <li><button className="dropdown-item" onClick={openLogin}>Login</button></li>
//                   <li><button className="dropdown-item" onClick={openRegistration}>Register</button></li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="container">
//         <h1>Welcome to Our Website</h1>
//         <p>Explore our services and products.</p>
//       </div>
//       {showModal && <AdminLogin onClose={() => setMshowModal(false)} />}
//       {showRegistration && <RegistrationForm onClose={() => setShowRegistration(false)} />}
//     </div>
//   );
// };

// export default HomePage;

// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import AdminLogin from './AdminLogin';
// import RegistrationForm from './AdminRegister';
// import './Home.css'

// const HomePage = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [showRegistration, setShowRegistration] = useState(false);

//   const openLogin = () => {
//     setShowModal(true);
//     setShowRegistration(false);
//   };

//   const openRegistration = () => {
//     setShowRegistration(true);
//     setShowModal(false);
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     fade: true, // Fading effect between slides
//     adaptiveHeight: true, // Carousel adapts height to the content
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-black">
//         <div className="container-fluid justify-content-between">
//           <a className="navbar-brand" href="#">Online Grocery Store</a>
//           <div className="d-flex">
//             <ul className="navbar-nav me-auto">
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownAdmin" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Admin
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdownAdmin">
//                   <li><button className="dropdown-item" onClick={openLogin}>Login</button></li>
//                   <li><button className="dropdown-item" onClick={openRegistration}>Register</button></li>
//                 </ul>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownCustomer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Customer
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdownCustomer">
//                   <li><button className="dropdown-item" onClick={openLogin}>Login</button></li>
//                   <li><button className="dropdown-item" onClick={openRegistration}>Register</button></li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="slider-container">
//         <Slider {...settings}>
//           <div>
//             <img src="https://res.cloudinary.com/djxbzcayc/image/upload/v1714657172/Add_a_heading_2_f0oys8.png" alt="Image 1" />
//           </div>
//           <div>
//             <img src="https://res.cloudinary.com/djxbzcayc/image/upload/v1714657172/Add_a_heading_4_ud5xkn.png" alt="Image 2" />
//           </div>
//           <div>
//             <img src="https://res.cloudinary.com/djxbzcayc/image/upload/v1714657172/Add_a_heading_3_qdvdmh.png" alt="Image 3" />
//           </div>
//         </Slider>
//       </div>
//       {showModal && <AdminLogin onClose={() => setShowModal(false)} />}
//       {showRegistration && <RegistrationForm onClose={() => setShowRegistration(false)} />}
//     </div>
//   );
// };

// export default HomePage;

// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import AdminLogin from './AdminLogin';
// import AdminRegister from './AdminRegister'; // Import AdminRegister
// import UserRegister from './UserRegister'; // Import UserRegister
// import './Home.css';

// const HomePage = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [showAdminRegistration, setShowAdminRegistration] = useState(false);
//   const [showUserRegistration, setShowUserRegistration] = useState(false);

//   const openLogin = () => {
//     setShowModal(true);
//     setShowAdminRegistration(false);
//     setShowUserRegistration(false);
//   };

//   const openAdminRegistration = () => {
//     setShowAdminRegistration(true);
//     setShowModal(false);
//     setShowUserRegistration(false);
//   };

//   const openUserRegistration = () => {
//     setShowUserRegistration(true);
//     setShowModal(false);
//     setShowAdminRegistration(false);
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     fade: true, // Fading effect between slides
//     adaptiveHeight: true, // Carousel adapts height to the content
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-black">
//         <div className="container-fluid justify-content-between">
//           <a className="navbar-brand" href="#">Online Grocery Store</a>
//           <div className="d-flex">
//             <ul className="navbar-nav me-auto">
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownAdmin" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Admin
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdownAdmin">
//                   <li><button className="dropdown-item" onClick={openLogin}>Login</button></li>
//                   <li><button className="dropdown-item" onClick={openAdminRegistration}>Register</button></li>
//                 </ul>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownCustomer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Customer
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdownCustomer">
//                   <li><button className="dropdown-item" onClick={openLogin}>Login</button></li>
//                   <li><button className="dropdown-item" onClick={openUserRegistration}>Register</button></li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="slider-container">
//         <Slider {...settings}>
//           <div>
//             <img src="https://res.cloudinary.com/djxbzcayc/image/upload/v1714657172/Add_a_heading_2_f0oys8.png" alt="Image 1" />
//           </div>
//           <div>
//             <img src="https://res.cloudinary.com/djxbzcayc/image/upload/v1714657172/Add_a_heading_4_ud5xkn.png" alt="Image 2" />
//           </div>
//           <div>
//             <img src="https://res.cloudinary.com/djxbzcayc/image/upload/v1714657172/Add_a_heading_3_qdvdmh.png" alt="Image 3" />
//           </div>
//         </Slider>
//       </div>
//       {showModal && <AdminLogin onClose={() => setShowModal(false)} />}
//       {showAdminRegistration && <AdminRegister onClose={() => setShowAdminRegistration(false)} />}
//       {/* {showUserRegistration && <UserRegister onClose={() => setShowUserRegistration(false)} />} */}
//       {showUserRegistration && <UserRegister onClose={() => setShowUserRegistration(false)} />}

//     </div>
//   );
// };

// export default HomePage;

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AdminLogin from './AdminLogin';
import AdminRegister from './AdminRegister';
import UserRegister from './UserRegister';
import UserLogin from './UserLogin'; // Import UserLogin
import './Home.css';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAdminRegistration, setShowAdminRegistration] = useState(false);
  const [showUserRegistration, setShowUserRegistration] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false); // Add state for UserLogin

  const openLogin = () => {
    setShowModal(true);
    setShowAdminRegistration(false);
    setShowUserRegistration(false);
    setShowUserLogin(false); // Ensure UserLogin is closed when opening modal
  };

  const openAdminRegistration = () => {
    setShowAdminRegistration(true);
    setShowModal(false);
    setShowUserRegistration(false);
    setShowUserLogin(false); // Ensure UserLogin is closed when opening admin registration
  };

  const openUserRegistration = () => {
    setShowUserRegistration(true);
    setShowModal(false);
    setShowAdminRegistration(false);
    setShowUserLogin(false); // Ensure UserLogin is closed when opening user registration
  };

  const openUserLogin = () => {
    setShowUserLogin(true);
    setShowModal(false); // Ensure modal is opened when opening UserLogin
    setShowAdminRegistration(false);
    setShowUserRegistration(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    adaptiveHeight: true,
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid justify-content-between">
          <a className="navbar-brand" href="#">Online Grocery Store</a>
          <div className="d-flex">
            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownAdmin" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Admin
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownAdmin">
                  <li><button className="dropdown-item" onClick={openLogin}>Login</button></li>
                  <li><button className="dropdown-item" onClick={openAdminRegistration}>Register</button></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownCustomer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Customer
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownCustomer">
                  <li><button className="dropdown-item" onClick={openUserLogin}>Login</button></li>
                  <li><button className="dropdown-item" onClick={openUserRegistration}>Register</button></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src="https://res.cloudinary.com/djxbzcayc/image/upload/v1714657172/Add_a_heading_2_f0oys8.png" alt="Image 1" width= "100vw"/>
          </div>
          <div>
            <img src="https://res.cloudinary.com/djxbzcayc/image/upload/v1714657172/Add_a_heading_4_ud5xkn.png" alt="Image 2" width= "100vw"/>
          </div>
          <div>
            <img src="https://res.cloudinary.com/djxbzcayc/image/upload/v1714657172/Add_a_heading_3_qdvdmh.png" alt="Image 3" width= "100vw"/>
          </div>
        </Slider>
      </div>
      {showModal && <AdminLogin onClose={() => setShowModal(false)} />}
      {showAdminRegistration && <AdminRegister onClose={() => setShowAdminRegistration(false)} />}
      {showUserRegistration && <UserRegister onClose={() => setShowUserRegistration(false)} />}
      {showUserLogin && <UserLogin onClose={() => setShowUserLogin(false)} />}
    </div>
  );
};

export default HomePage;








