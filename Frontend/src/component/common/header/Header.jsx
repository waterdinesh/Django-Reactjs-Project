import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import logo from "../../images/trainer/logo-white.svg";
import '../header/header.css';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FaArrowRight } from 'react-icons/fa';

import Form from 'react-bootstrap/Form';

import { useForm } from 'react-hook-form';



function Header() {

  const data = useSelector(state => state.cart.countvalue)
  console.log(data)


  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  // const [show, setShow] = useState(true);
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
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header-container">
        <Container fluid>
          <Navbar.Brand as={Link} to="/"><img src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/classes" className='headerhover'>CLASSES</Nav.Link>
              <Nav.Link as={Link} to="/schedule" className='headerhover'>SCHEDULE</Nav.Link>
              <Nav.Link as={Link} to="/trainers" className='headerhover'>TRAINERS</Nav.Link>
              <Nav.Link as={Link} to="/firsttimers" className='headerhover'>FIRST TIMERS</Nav.Link>
              <Nav.Link as={Link} to="/personaltraining" className='headerhover'>PERSONAL TRAINING</Nav.Link>
              <Nav.Link as={Link} to="/contact" className='headerhover'>CONTACT</Nav.Link>
              <Nav.Link as={Link} to="" className='headerhover'>
              <Dropdown >
      <Dropdown.Toggle  id="dropdown-basic" style={{backgroundColor:"none"}}>
      <FaUserAlt/>
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1" onClick={handleShow}> Login
       </Dropdown.Item>
        {/* <Dropdown.Item href="#/action-2"> <Button variant="primary" onClick={showLogin}>SignUp </Button> </Dropdown.Item> */}
   
      </Dropdown.Menu>
    </Dropdown>
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className='headerhover'><FaShoppingCart/>{data}</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/membership" className='buy'>BUY MEMBERSHIP</Nav.Link>
              <Nav.Link eventKey={2} as={Link} to="/bookclass" className='buy'>
                BOOK CLASS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

      <Modal show={show} onHide={handleClose}>
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
          <h3 className='signup'  onClick={handleShowLogin}>Sign Up <FaArrowRight/></h3>
          {/* <p>Forgot your password? <a href="#">Click here</a></p> Add the "Forgot Password" link */}
          <p>Forgot your password?</p> {/* Add the "Forgot Password" link */}
        </Modal.Body>
      </Modal>


      <Modal show={showLogin} onHide={handleCloseLogin}>
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
    <h3 className='login' onClick={handleShow}>Log In <FaArrowRight/></h3>
  </>
)}
</Modal.Body>
      </Modal>
     
    </>
  );
}

export default Header;

