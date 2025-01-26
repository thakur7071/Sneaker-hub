import './Hero.css';

import shoeImg2 from '../Assets/shoe-2(main).png';

const Hero = () => {
    return (
        <div className="main">
            <div className="left_col">
                <div className="shoe_title">
                    <p>Nike Air Jordan</p>
                </div>
              
                <div className="shoe_description">
                    <p>
                        Nike Shoes E-commerce Web Template Shop - UpLabs, Nike introduces new
                        consumer website - oregonlive.com
                    </p>
                </div>
                <div className="cart">
                    <button className="cart_btn">Buy Now</button>
                </div>
            </div>
            <div className="right_col">
                <img src={shoeImg2} className="featured_img" alt="Featured Sneaker" />
            </div>
        </div>
    );
};

export default Hero;
