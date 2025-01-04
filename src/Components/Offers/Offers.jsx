import './Offers.css';
import SneakerHub from '../Assets/SneakerHub.png';

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only the best sellers products Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, rem.</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={SneakerHub} alt=''/>
        </div>
    </div>
  );
};
export default Offers;
