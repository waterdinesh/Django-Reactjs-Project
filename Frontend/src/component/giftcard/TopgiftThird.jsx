import React from 'react';
import './topgiftthird.css';
import { Link } from 'react-router-dom';
import cs1 from "../images/giftcard/Gift-card-2@2x-1024x1017.jpg";
const TopgiftThird = () => {
    return (
        <div className='topgiftthirdall'>
        <div className='lefttopgiftthird'>
            <h1>E-GIFT CARD</h1>
            <p> When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. 
                Amount is flexible and you can personalize your gift card with a message.</p>
            <Link to='/egiftshopnow'>
            <button className='topgiftthirdbtn'>Shop Now</button>
            </Link>
            
           
        </div>
       
    <div className='righttopgiftthird'>
    <img
        className="d-block imgtopthird"
       
        src={cs1}
        alt="First slide"
      />
    </div>
    </div>
      )
}

export default TopgiftThird