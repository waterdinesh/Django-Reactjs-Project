import React, { useState } from 'react';
import '../user/userlogin.css';
import { FaArrowRight } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

const UserLogin = () => {
  const [show, setShow] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleClose = () => {
    setShow(false);
    setIsSubmitted(false);
    reset();
  };

  const handleShow = () =>{
    setShow(true);
  } 

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  const handleLogin = () => {
    console.log('Login clicked');
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className='divapply'>
      {/* <h1>WANT TO WORK WITH US? <br/> BECOME A TRAINER.</h1> */}
      {/* <h1 className='applynow' onClick={handleShow}>APPLY NOW <FaArrowRight/></h1> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className='modalcon'>
            <Modal.Title>CREATE ACCOUNT</Modal.Title>
          </div>          
        </Modal.Header>
        <Modal.Body className="equal-height-modal-body">
          {isSubmitted ? (
            <div className="success" style={{ color: 'green' }}>Form submitted successfully! &#10003;</div>
          ) : (
            <>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>UserName*</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span className="error" style={{ color: 'red' }}>This field is required</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address*</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span className="error" style={{ color: 'red' }}>This field is required</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password*</Form.Label>
                  <Form.Control
                    type="number"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && <span className="error" style={{ color: 'red' }}>This field is required</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Repeat Password*</Form.Label>
                  <Form.Control
                    {...register("message", { required: true })}
                  />
                  {errors.message && <span className="error" style={{ color: 'red' }}>This field is required</span>}
                </Form.Group>
                <Button variant="                primary" type="submit">Register</Button>
              </Form>

              <p>Already have an account?</p>
              <h3 className='login' onClick={handleShowLogin}>Log In <FaArrowRight/></h3>
            </>
          )}
        </Modal.Body>
      </Modal>

      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <div className='modalcon'>
            <Modal.Title>LOG IN</Modal.Title>
          </div>          
        </Modal.Header>
        <Modal.Body className="equal-height-modal-body">
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address*</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password*</Form.Label>
              <Form.Control
                type="password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="rememberMe">
              <Form.Check
                type="checkbox"
                label="Remember Me"
              />
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
          </Form>
          <p>Don't have an account yet?</p>
          <h3 className='signup' onClick={handleShow}>Sign Up <FaArrowRight/></h3>
          {/* <p>Forgot your password? <a href="#">Click here</a></p> Add the "Forgot Password" link */}
          <p>Forgot your password?</p> {/* Add the "Forgot Password" link */}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserLogin;







