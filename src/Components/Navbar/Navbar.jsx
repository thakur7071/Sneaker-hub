import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";
import mainlogo from "../Assets/mainlogo.jpg";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import loginicon from "../Assets/loginicon.png";
import navdropdown from "../Assets/navdropdown-icon.png";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = ({ setShowLogin }) => {
  document.querySelectorAll(".nav-menu li").forEach((item) => {
    item.addEventListener("click", () => {
      // Remove active class from all list items
      document
        .querySelectorAll(".nav-menu li")
        .forEach((el) => el.classList.remove("active"));

      // Add active class to the clicked item
      item.classList.add("active");
    });
  });

  const [menu, setMenu] = useState("");
  const {getTotalCartItems}=useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
      
  
          <img src={mainlogo} alt="" />
        
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={navdropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link  to="/">
            Home
          </Link>
        
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link  to="/mens">
            Mens
          </Link>
       
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link  to="/womens">
            Womens
          </Link>
      
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link  to="/kids">
            Kids
          </Link>
      
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
