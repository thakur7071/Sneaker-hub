import PropTypes from 'prop-types'; // Import PropTypes
import './RelatedProducts.css';
import data from '../Assets/related';
import Item from '../Item/Item';

const RelatedProducts = ({ category }) => {
  // Filter related products based on the category
  const filteredProducts = data.filter(item => item.category === category);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional for a smooth scroll effect
    });
  };

  return (
    <div className='related'>
      <h1 >Related Products</h1> {/* Added onClick event */}

      <div className="related-item" onClick={scrollToTop}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No related products found in this category.</p>
        )}
      </div>
    </div>
  );
};

// Define prop types
RelatedProducts.propTypes = {
  category: PropTypes.string.isRequired, // Expecting category to be a required string
};

export default RelatedProducts;
