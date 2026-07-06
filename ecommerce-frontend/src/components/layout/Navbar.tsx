import "../../styles/navbar.css";
import SearchBar from "../common/SearchBar"
import { Link } from "react-router-dom";

import {
  FaShoppingCart,
  FaHeart,
  FaUserCircle,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🛒 ShopSphere
      </div>

      <SearchBar />

      <ul className="menu">
       
       <li>
  <Link to="/">Home</Link>
</li>

<li>
  <Link to="/products">Products</Link>
</li>

<li>
  <Link to="/cart">Cart</Link>
</li>

        

        <li><FaHeart />
  <Link to="/wishlist">Wishlist</Link>
</li>

<li><FaShoppingCart />
  <Link to="/cart">Cart (0)</Link>
</li>

<li><FaUserCircle />
  <Link to="/login">Login</Link>
</li>
       
      </ul>
    </nav>
  );
}

export default Navbar;