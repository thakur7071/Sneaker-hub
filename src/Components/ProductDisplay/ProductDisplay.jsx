import PropTypes from 'prop-types';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useState, useEffect } from 'react';

const ProductDisplay = (props) => {
  const { product } = props;

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // State to manage the selected size and quantity
  const [selectedSize, setSelectedSize] = useState('');
  

  // Handle size selection change
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };



  // Calculate discount percentage
  const discount = Math.round(((product.old_price - product.new_price) / product.old_price) * 100);

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        {/* Image carousel or slider for product images */}
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt='' />
        </div>
       
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(100)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
          <div className="productdisplay-right-discount">Save {discount}%</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati temporibus cupiditate, excepturi in autem eligendi placeat nesciunt corporis illum laboriosam.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <select className="productdisplay-right-sizes" value={selectedSize} onChange={handleSizeChange}>
            <option value="" disabled>Select a size</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
       
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};

// Define prop types for the ProductDisplay component
ProductDisplay.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    old_price: PropTypes.number.isRequired,
    new_price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductDisplay;
