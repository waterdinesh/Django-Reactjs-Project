import React from 'react'
import ContactTop from './ContactTop';
import ContactMap from './ContactMap';
import ContactFitness from './ContactFitness';
import ContactCarousel from './ContactCarousel';
import Fitness from '../common/fitness/Fitness';
import ContactBook from './ContactBook';
const ContactAsmbel = () => {
  return (
    <div>
          <ContactTop/> 
          <ContactMap/>
          <ContactFitness/>
          <ContactCarousel/>
          <ContactBook/>
          <Fitness/>
    </div>
  )
}

export default ContactAsmbel