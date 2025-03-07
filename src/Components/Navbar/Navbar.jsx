import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";
import mainlogo from "../Assets/mainlogo.jpg";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import loginicon from "../Assets/loginicon.png";
import navdropdown from "../Assets/navdropdown-icon.png";
import { ShopContext } from "../../Context/ShopContext";
import PropTypes from "prop-types"; // Import PropTypes

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdownRef = useRef();

  const dropdown_toggle = () => {
    menuRef.current.classList.toggle("nav-menu-visible");
    dropdownRef.current.classList.toggle("open");
  };

  const closeMenu = () => {
    menuRef.current.classList.remove("nav-menu-visible");
    dropdownRef.current.classList.remove("open"); // Close the dropdown icon
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={mainlogo} alt="Main Logo" />
      </div>
      <img
        ref={dropdownRef}
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={navdropdown}
        alt="Dropdown Icon"
      />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={closeMenu}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/mens">Mens</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/womens">Womens</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/kids">Kids</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/cart">
          <img className="cart-icon" src={cart_icon} alt="Cart Icon" />
        </Link>
        <img
          className="loginicon"
          onClick={() => setShowLogin(true)}
          src={loginicon}
          alt="Login Icon"
        />
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

// ✅ Add PropTypes validation
Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired, // Ensure it's a function
};

export default Navbar;
