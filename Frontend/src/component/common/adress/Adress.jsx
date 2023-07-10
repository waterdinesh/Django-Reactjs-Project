import React from 'react'
import '../adress/adress.css';
import { FaMobileAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import { FaMapMarker } from 'react-icons/fa';

const Adress = () => {
  return (
    <div className='adressall'>
        <div className='adressinside'>
            <h1><FaMobileAlt/></h1>
            <h3>CONTACT</h3>
            <p>T: 070 9485 7568</p>
            <p>info@example.com</p>
        </div>
        <div className='adressinside'>
            <h1><FaClock/></h1>
            <h3>HOURS</h3>
            <p>Mon to Fri: 7:30 am — 1:00 am</p>
            <p>Sat: 9:00 am — 1:00 am</p>
            <p>Sun: 9:00 am — 11:30 pm</p>
        </div>
        <div className='adressinside'>
            <h1><FaMapMarker/></h1>
            <h3>LOCATION</h3>
            <p>85 Royal Mint Street,</p>
            <p>London, E1 8LG, UK</p>
        </div>
    </div>
  )
}

export default Adress