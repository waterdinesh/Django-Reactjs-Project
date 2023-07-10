import React from 'react'
import '../timerheart/timerheart.css';
// import { FaMobileAlt } from 'react-icons/fa';
import {FaRegHeart } from 'react-icons/fa';
import {FaWeight } from 'react-icons/fa';
import { MdTimer } from "react-icons/md";

const TimerHeart = () => {
  return (
    <div className='timeheartall'>
        <div className='timeheartinside'>
            <h1><MdTimer className="map-marker"/></h1>
            <h3>SWEAT FOR 45 MIN</h3>
        </div>
        <div className='timeheartinside'>
            <h1><FaRegHeart className="map-marker"/></h1>
            <h3>MEET NEW PEOPLE</h3>
           
        </div>
        <div className='timeheartinside'>
            <h1><FaWeight className="map-marker"/></h1>
            <h3>BURN UP TO 700 CALORIES</h3>
        </div>
    </div>
  )
}

export default TimerHeart