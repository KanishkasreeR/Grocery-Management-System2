import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AdminLogin from './AdminLogin';
import AdminRegister from './AdminRegister';
import UserRegister from './UserRegister';
import UserLogin from './UserLogin'; 
import './Home.css';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAdminRegistration, setShowAdminRegistration] = useState(false);
  const [showUserRegistration, setShowUserRegistration] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);

  const openLogin = () => {
    setShowModal(true);
    setShowAdminRegistration(false);
    setShowUserRegistration(false);
    setShowUserLogin(false); 
  };

  const openAdminRegistration = () => {
    setShowAdminRegistration(true);
    setShowModal(false);
    setShowUserRegistration(false);
    setShowUserLogin(false); 
  };

  const openUserRegistration = () => {
    setShowUserRegistration(true);
    setShowModal(false);
    setShowAdminRegistration(false);
    setShowUserLogin(false); 
  };

  const openUserLogin = () => {
    setShowUserLogin(true);
    setShowModal(false); 
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








