import React, { useState } from 'react';
import web from "../images/giftcard/Gift-card-2@2x-1024x1017.jpg";
import './shopnow.css';
import { addTOBag } from '../../redux/actions/action';
import { useDispatch } from 'react-redux';


const ShopNow = () => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(0);

    const handleAddClick = () => {
        setCount(count + 1);
    };

    const handleMinusClick = () => {
        if (count === 0) {
            return;
        }
        setCount(count - 1);
    };

 
    return (
        <>
            <div className='allshopnow'>
                <div className='leftshopnow'>
                    <img src={web} alt=""  />
                </div>
                <div className='rightshopnow'>
                    <h1>PHYSICAL GIFT CARD</h1>
                    <h2>$100.00</h2>
                    <p>When in doubt what to buy as a gift, this is the best option.
                        Our gift cards have no expiration date and can be used to pay for
                        all the services in our beauty studio or in our
                        cosmetic shop. Amount is flexible and you can personalize
                        your gift card with a message.</p>
                    <div className='rightshopnowinside'>
                        <div className="rightshopnowinsideallbtn">
                            <p onClick={handleMinusClick}>-</p>
                            <div>{count}</div>
                            <p onClick={handleAddClick}>+</p>
                        </div>

                        <button className='addbag' onClick={()=>dispatch({type:'ADD',payload:{'name':'PHYSICAL GIFT CARD','count':count,'price':'$100.00','src':web}})}>add a bag</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ShopNow