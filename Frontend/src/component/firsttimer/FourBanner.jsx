import React from 'react';
import '../firsttimer/fourbanner.css';
import Carousel from 'react-bootstrap/Carousel';
import cs1 from "../images/firsttimer/Classes-4@4x-1024x1024.jpg";
import cs2 from "../images/firsttimer/Classes-6@4x-1024x1024.jpg";
import cs3 from "../images/firsttimer/Classes-2@4x-1024x1024.jpg";
import cs4 from "../images/firsttimer/Classes-3@4x-1024x1024.jpg";
import cs5 from "../images/firsttimer/Classes-1@4x-1024x1024.jpg";

const FourBanner = () => {
  return (
    <div className='fourbannerall'>
    <div className='leftfourbanner'>
        <h1>BEST TRAINERS</h1>
        <p> City Gym offers the best amenities including swimming pools, steam rooms, sun decks with awesome views, locker rooms equipped with the high quality cosmetics and eco-friendly towels. 
            We also have amazing on-site healthy food and drinks bar.</p>
        <button className='fourbannerbtn'>Learn More</button>
       
    </div>
   
<div className='rightfourbanner'>
  <Carousel interval={100}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ height: '500px' }}
        src={cs1}
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ height: '500px' }}
        src={cs2}
        alt="Second slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ height: '500px' }}
        src={cs3}
        alt="Third slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ height: '500px' }}
        src={cs4}
        alt="Fourth slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ height: '500px' }}
        src={cs5}
        alt="Fourth slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</div>
</div>
  )
}

export default FourBanner