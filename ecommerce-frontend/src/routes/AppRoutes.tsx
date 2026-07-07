import {  Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Checkout from "../pages/Checkout/Checkout";
import Profile from "../pages/Profile/Profile";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default AppRoutes;