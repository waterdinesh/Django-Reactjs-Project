import React from 'react';
import './topgiftfour.css';
import { Link } from 'react-router-dom';
import cs1 from "../images/giftcard/Gift-card-1@2x-1024x1017.jpg";

const TopgiftFour = () => {
    return (
        <div className='topgiftfourall'>    
    <div className='lefttopgiftfour'>
    <img
        className="d-block imgtopfour"
       
        src={cs1}
        alt="First slide"
      />
    </div>
    <div className='righttopgiftfour'>
            <h1>PHYSICAL GIFT CARD</h1>
            <p> When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. 
                Amount is flexible and you can personalize your gift card with a message.</p>
                <Link to='/shopnow'>  <button className='righttopgiftbtn'>Shop Now</button>
                </Link>
          
           
        </div>
    </div>
      )
}

export default TopgiftFour