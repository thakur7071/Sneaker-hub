import { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import removeIcon from '../Assets/crossicon.png';

const CartItems = () => {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      {/* Header Row */}
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
     
        <p>Quantity</p>
    
        <p>Remove</p>
      </div>
      <hr />

      {/* Cart Items */}
      {all_product
        .filter((e) => cartItems[e.id] > 0)
        .map((e) => (
          <div key={e.id}>
            <div className="cartitems-format cartitems-format-main">
              <img
                src={e.image}
                alt={`${e.name} product`}
                className="cartitems-product-icon"
              />
              <p>{e.name}</p>
             
              <span className="cartitems-quantity">{cartItems[e.id]}</span>
             
                <img
                 onClick={() => removeFromCart(e.id)}
                  className="cartitems-remove-icons"
                  src={removeIcon}
                  alt="Remove icon"
                />
            
            </div>
            <hr />
          </div>
        ))}

        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr/>
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className='cartitems-promocode'>
            <p>If you have a promo code, Enter it here</p>
            <div className='cartitems-promobox'>
              <input type='text' placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CartItems;
