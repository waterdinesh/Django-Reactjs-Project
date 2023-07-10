import React, { useState } from 'react';
import '../contact/contactbook.css';
import { FaArrowRight } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

const ContactBook = () => {
  const [show, setShow] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleClose = () => {
    setShow(false);
    setIsSubmitted(false); // reset isSubmitted when closing the modal
    reset(); // reset form fields when closing the modal
  };

  const handleShow = () => setShow(true);

  const onSubmit = (data) => {
    console.log(data);
    alert("hello")
    setIsSubmitted(true);
  };
    
  return (
    <div className='divapply1'>
      <h1>BOOK A TOUR. CHECK  <br/> OUT ALL OUR SPACES.</h1>
      <h1 className='applynow1' onClick={handleShow}>APPLY NOW <FaArrowRight/></h1>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className='modalcon1'>
            <Modal.Title>BOOK A TOUR</Modal.Title>
            <h5>Please fill out the form and we will get back to you asap.</h5>
          </div>          
        </Modal.Header>
        <Modal.Body>
        {isSubmitted ? (
            <div className="success"style={{ color: 'green' }}>Form submitted successfully! &#10003;</div>
          ) : (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name*</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  {...register("name", { required: true })}
                />
                {errors.name && <span className="error"style={{ color: 'red' }}>This field is required</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone Number*</Form.Label>
                <Form.Control
                  type="number"
                  {...register("phone", { required: true })}
                />
                {errors.phone && <span className="error"style={{ color: 'red' }}>This field is required</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address*</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="error"style={{ color: 'red' }}>This field is required</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message*</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  {...register("message", { required: true })}
                />
                {errors.message && <span className="error"style={{ color: 'red' }}>This field is required</span>}
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>        
    </div>
  );
};

export default ContactBook;