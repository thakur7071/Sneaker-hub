import './Footer.css';

import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing icons from react-icons
import { AiOutlineClose } from 'react-icons/ai'; // Importing an "X" icon from Ant Design Icons

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-main">
                <div className="footer-logo">
                    <h4>SneakerHub</h4>
                    <ul className='footer-links'>
                        <li>Products</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div className="footer-social-icon">
                        <div className="footer-icons-container">
                            {/* Wrap icons with anchor tags for links */}
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                                <AiOutlineClose /> {/* Replaced Twitter icon with "X" icon */}
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* New Contact Address Section */}
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>123 Sneaker St,</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Email: contact@sneakerhub.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>

                {/* New Customer Service Section */}
                <div className="footer-customer-service">
                    <h4>Customer Service</h4>
                    <ul>
                        <li>FAQ</li>
                        <li>Shipping & Returns</li>
                        <li>Order Tracking</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>

            <div className="footer-copyright">
                <p>Copyright @ 2024 - All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
