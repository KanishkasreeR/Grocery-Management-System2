import { Routes as Switch, Route } from "react-router-dom";

import AdminHome from "./screens/AdminHome";
import AddProduct from "./screens/AddProduct";
import UpdateProduct from "./screens/UpdateProduct";
import AdminRegister from "./screens/AdminRegister";
import AdminLogin from "./screens/AdminLogin";
import Profile from "./screens/AdminProfile";
import UserRegisterPopup from "./screens/UserRegister";
import HomePage from "./screens/Home";
import CustomerHome from "./screens/UserHome";
import Products from "./screens/Products";
import WishlistPage from "./screens/UserWishlist";
import Cart from "./screens/UserCart"
import OrderPage from "./screens/AdminOrders";
import UserOrderPage from "./screens/UserOrder";


const Routes = () => {
  return (
    <Switch>
      <Route path="/" element = {<HomePage />}/>
      <Route path="/adminregister" element={<AdminRegister />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path = "/userRegister" element = {<UserRegisterPopup/>}/>
      <Route path="/adminhome" element={<AdminHome />}/>
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/UpdateProduct/:id" element={<UpdateProduct />} /> {/* Corrected route */}
      <Route path="/adminprofile" element={<Profile />} />
      <Route path="/customerhome" element={<CustomerHome />} />
      <Route path="/products" element={<Products />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orderhistory" element={<OrderPage />} />
      <Route path="/userorder" element={<UserOrderPage />} />
    </Switch>
    
  )
};


export default Routes;