import React from 'react';
import '../giftcard/topgiftsecond.css';
import { FaServicestack } from 'react-icons/fa';
import { FaGift} from 'react-icons/fa';
import {GiPriceTag} from "react-icons/gi";

const TopGiftSecond = () => {
    return (
        <div className='topgiftsecondall'>
            <div className='topgiftsecondinside'>
            <h1><FaServicestack className="map-marker1" /></h1>
                <h4>EASY TO GIVE</h4>
                <h5>Electronic gift card can be sent with a
                    coule of clicks. Easy as is, fastest
                    delivery possible.</h5>
            </div>
            <div className='topgiftsecondinside'>
                <h1><GiPriceTag className="map-marker1" /></h1>
                <h4>NO AMOUNT LIMITATIONS</h4>
                <h5>You can choose any amount you wish
                    and it will be applied to the gift card.
                    Very flexible.</h5>

            </div>
            <div className='topgiftsecondinside'>
                <h1><FaGift className="map-marker1" /></h1>
                <h4>BEAUTIFULLY PERSONALIZED</h4>
                <h5>There is also a possibility to write a
                    personalized message: nice, funny, just
                    as you wish.</h5>
            </div>
        </div>
    )
}

export default TopGiftSecond