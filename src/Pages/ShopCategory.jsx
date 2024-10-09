import { useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="Banner" className="shopcategory-banner" /> {/* Added alt text and class for styling */}
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} 
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

// Define prop types
ShopCategory.propTypes = {
  category: PropTypes.string.isRequired, // Specify that category is a required string
  banner: PropTypes.string.isRequired, // Specify that banner is a required string
};

export default ShopCategory;
