import { Link } from 'react-router-dom';
import './Item.css';
import PropTypes from 'prop-types';

const Item = (props) => {
    return (
        <div className='item'>
           <Link to={`/product/${props.id}`}>
               <img src={props.image} alt={props.name} />
       
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    {props.new_price}
                </div>
                <div className="item-price-old">
                    {props.old_price}
                </div>
            </div>
            </Link> 
        </div>
        
    );
};

Item.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired, // id should be a required string or number
    image: PropTypes.string.isRequired, // image should be a required string
    name: PropTypes.string.isRequired,  // name should be a required string
    new_price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired, // new_price should be a required string or number
    old_price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]), // old_price is optional, string or number
};

export default Item;
