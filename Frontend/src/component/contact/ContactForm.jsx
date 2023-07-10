import React, { useState } from 'react';
import '../contact/contactform.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact:'',
    subject: '',
    message: ''
   
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct the form data to send
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('number', formData.location);
    formDataToSend.append('subject', formData.location);
    formDataToSend.append('message', formData.message);
    console.log(formDataToSend)
  
    // Send the form data to the Django API
    fetch('http://127.0.0.1:8000/contact/', {
      method: 'POST',
      body: formDataToSend,
    })
    .then((response) => {
      console.log('Response:', response);
      return response.json();
    })
      .then((data) => {
        console.log('Form data submitted successfully:', data);
        // Reset the form
        setFormData({ name: '', email: '',number:'', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('Error submitting form data:', error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className='contactformall'>
    <h1>CONTACT US</h1>
    <p>We are here to help. Please complete the short form below and we’ll get
back as soon as possible.</p>
  <div className='centerinputcf'>
  <input
  type="text"
  placeholder="name*"
  className='inputform1'
  name="name"
  id='name'
  value={formData.name} 
  onChange={handleChange}
 
/>
    <input type="text"  placeholder='email*' className='inputform1' 
    id='email'
    name="email"
  value={formData.email} 
  onChange={handleChange}
 
  />
   
    <input type="number"  placeholder='phonenumber*' className='inputform2' 
    id='number'
    name="number"
  value={formData.number} 
  onChange={handleChange}
 
  />

  </div>
  <input type="text" placeholder='subject*'  className='inputform3' 
  id='subject'
  name="subject"
  value={formData.subject} 
  onChange={handleChange}

  />
  <input type="text" placeholder='message*'  className='inputform3 ' 
  id='message'
  name="message"
  value={formData.message} 
  onChange={handleChange}

  /> 
   <button type='submit' className='contactformbtn' >send messags</button>
</div>
    </form>
     
  
  )
}

export default ContactForm