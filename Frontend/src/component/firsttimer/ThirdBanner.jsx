import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../firsttimer/thirdbanner.css';
import ts1 from "../images/firsttimer/Club-Feature-1@2x.jpg";
import ts2 from "../images/firsttimer/Club-Feature-2@2x.jpg";
import ts3 from "../images/firsttimer/Club-Feature-3.jpg";

const ThirdBanner = () => {
  return (
    <div className='allthirdbanner'>
         <CardGroup>
  <Card style={{ margin: '10px' }}>
    <div className='thirdbanerimg'>
    <Card.Img variant="top" src={ts1} />
    </div>
 
    <Card.Body>
      <Card.Title>FREE WEIGHT AREA</Card.Title>
      <Card.Text>
        Our gym has a very spacious and well-equipped free weight area.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{ margin: '10px' }}>
  <div className='thirdbanerimg'>
    <Card.Img variant="top" src={ts2} />
    </div>
    <Card.Body>
      <Card.Title>PERSONAL TRAINING</Card.Title>
      <Card.Text>
        City Gym hires the best professional trainers. Our entire team is certified and very experienced.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{ margin: '10px' }}>
  <div className='thirdbanerimg'>
    <Card.Img variant="top" src={ts3} />
    </div>
    <Card.Body>
      <Card.Title>SPORT BAR</Card.Title>
      <Card.Text>
        The sports bar menu was created by Anna Soles, an award-winning nutritionist.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>

    </div>
  )
}

export default ThirdBanner