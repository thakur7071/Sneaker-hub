import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";
import mainlogo from "../Assets/mainlogo.jpg";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import loginicon from "../Assets/loginicon.png";
import navdropdown from "../Assets/navdropdown-icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("");
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
        <img src={mainlogo} alt="" />
      </div>
      <img
        ref={dropdownRef}
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={navdropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
            closeMenu();
          }}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => {
            setMenu("mens");
            closeMenu();
          }}
        >
          <Link to="/mens">Mens</Link>
        </li>
        <li
          onClick={() => {
            setMenu("womens");
            closeMenu();
          }}
        >
          <Link to="/womens">Womens</Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
            closeMenu();
          }}
        >
          <Link to="/kids">Kids</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/cart">
          <img className="cart-icon" src={cart_icon} alt="" />
        </Link>
        <img
          className="loginicon"
          onClick={() => setShowLogin(true)}
          src={loginicon}
          alt="loginicon"
        />
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
