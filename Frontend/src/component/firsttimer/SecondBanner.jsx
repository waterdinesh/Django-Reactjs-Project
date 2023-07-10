import React from 'react';
import '../firsttimer/secondbanner.css';
import Carousel from 'react-bootstrap/Carousel';
import cs1 from "../images/firsttimer/Carrer-Details@2x-1024x1017.jpg";
import cs2 from "../images/firsttimer/Notes-on-Culture@2x-1024x1017.jpg";
import cs3 from "../images/firsttimer/Best-Place-4@2x-1024x1017.jpg";
import cs4 from "../images/firsttimer/Best-Place-5@2x-1024x1017.jpg";
 


const SecondBanner = () => {
  return (
    <div className='secondbannerall'>
        <div className='leftsecondbanner'>
        <Carousel>
      <Carousel.Item>
        <img
        className="d-block w-100" style={{ height: '500px' }}
          src={cs1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className="d-block w-100" style={{ height: '500px' }}
          src={cs2}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className="d-block w-100" style={{ height: '500px' }}
          src={cs3}
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className="d-block w-100" style={{ height: '500px' }}
          src={cs4}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        <div className='rightsecondbanner'>
            <h1>BEST PLACE FOR NEW RESULTS</h1>
            <p> Never been to a gym before? City Gym is a right place to start your personal sports journey. 
                Our friendly team will guide you all way long and will make sure your start is very smooth.</p>
           
        </div>
    </div>
  )
}

export default SecondBanner