import React from 'react';
import '../contact/contactcarosel.css';
import Carousel from 'react-bootstrap/Carousel';
import cs1 from "../images/trainer/Schedule-Hero@2x-scaled.jpg";
import cs2 from "../images/firsttimer/Best-Place-5@2x-1024x1017.jpg";
import cs3 from "../images/contact/Classes-Details@2x.jpg";
// import motoimg from '../images/personaltrainer/circle-motto.svg'

const ContactCarousel = () => {
  return (
    <div className='allcontalcarosel'>
        <h1>TAKE A LOOK INSIDE</h1>
        {/* <img src={motoimg} alt="" className="image-rotation"style={{ transform: "translateX(-50px)" }}  /> */}
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cs1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cs2}
          style={{ height: '500px' }}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cs3}
          style={{ height: '500px' }}
          alt="Second slide"
        />
      
      </Carousel.Item>
    </Carousel>
  
    </div>
  )
}

export default ContactCarousel