import React, { useState } from 'react';
import '../contact/contactfitness.css'
import axios from 'axios';

const ContactFitness = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber:'',
    subject: '',
    message: ''
   
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleClick = (e) => {
    e.preventDefault();
    // Construct the form data to send
    const formDataToSend = new FormData();
    console.log(formData.name)
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phonenumber', formData.phonenumber);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);
    console.log(formDataToSend,"foemmm")
  
    // Send the form data to the Django API
    // fetch('http://127.0.0.1:8000/contact/', {
    //   method: 'POST',
    //   body: formDataToSend,
    // })
    axios.post('http://127.0.0.1:8000/contact/',formDataToSend)
    .then(res => console.log(res.data))
    // .then((response) => {
    //   console.log('Response:', response);
    //   return response.json();
    // })
      // .then((data) => {
      //   console.log('Form data submitted successfully:', data);
      //   // Reset the form
      //   setFormData({ name: '', email: '',phonenumber:'', subject: '', message: '' });
      // })
      .catch((error) => {
        console.error('Error submitting form data:', error);
      });
  };
    return (
        <div className='fitnessallx1' >
           <div className='fitmain1'>
           <h1>Contact</h1>
           </div>
           
    <div className='fitnessall1'>
   
    <h1>CONTACT US</h1>
    <p>We are here to help. Please complete the short form below and we’ll get
back as soon as possible.</p>
  <div className='centerinputcf'>
  <input
  type="text"
  placeholder="name*"
  className='contactforminput1'
  name="name"
  id='name'
  value={formData.name} 
  onChange={handleChange}
 
/>
    <input type="text"  placeholder='email*' className='contactforminput1'  
      id='email'
    name="email"
  value={formData.email} 
  onChange={handleChange}
  />
   
    <input type="phonenumber"  placeholder='phonenumber*' className='contactforminput2'  
    id='phonenumber'
    name="phonenumber"
  value={formData.phonenumber} 
  onChange={handleChange}
  />

  </div>
  <input type="text" placeholder='subject*' className='contactforminput3' 
  id='subject'
  name="subject"
  value={formData.subject} 
  onChange={handleChange}
  />
  <input type="text" placeholder='message*' className='contactforminput3' 
  id='message'
  name="message"
  value={formData.message} 
  onChange={handleChange}
  /> 
   <button className='contactformbtn1' type='button' onClick={handleClick}>send message</button>

    </div>
            
        </div>)
}

export default ContactFitness