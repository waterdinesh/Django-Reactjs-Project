import React from 'react';
import { Link } from 'react-router-dom';
import '../giftcard/buygift.css';
import { FaArrowRight } from 'react-icons/fa';

const BuyGift = () => {
  return (
    <div className='divapply3'>
      <h1 className='divapply3h1'>BEST GIFT EVER. WITH OR WITHOUT <br/>OCCASION.</h1>
      <Link to='/buygift' style={{textDecoration:"none"}} >
        <h1 className='applynow3'> BUY GIFT CARD <FaArrowRight/></h1>
       
      </Link>
    </div>
  );
};

export default BuyGift;
