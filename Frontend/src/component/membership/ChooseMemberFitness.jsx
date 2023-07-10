import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import './choosememberfitness.css'

const ChooseMemberFitness = () => {
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
        setIsSubmitted(true);
    };
    return (
        <div className='fitnessallx2' >
            <div className='fitmain2'>
                <h1>Join <br />Now</h1>
            </div>

            <div className='fitnessall2'>

                <h1 className='chosememberh12'>CHOOSE YOUR MEMBERSHIP</h1>
                <div className='chooseheu'>
                    <div className='chosememberone2' onClick={handleShow}>
                        <div className='chosemembertwo2'>
                            <h2 className='chosememberh22'>3 MONTHS MEMBERSHIP</h2>
                            <p>3 month membership card will give you access to all our awesome amenities, spaces and gorup classes. There is no time limit, you can come and go whenever you like.</p>
                        </div>

                        <h6 className='chosememberh62'>$439</h6>
                    </div>
                    <div className='chosememberone2' onClick={handleShow}>
                        <div className='chosemembertwo2'>
                            <h2 className='chosememberh22'>10 CLASSES</h2>
                            <p>10 classes card will give you acces to any 10 group classes. You can use the card as long as you like, there is no time limit. The card is recharchable.</p>
                        </div>
                        <h5 className='chosememberh52'>THE MOST POPULAR</h5>
                        <h6 className='chosememberh62'>$169</h6>
                    </div>
                    <div className='chosememberone2' onClick={handleShow}>
                        <div className='chosemembertwo2'>
                            <h2 className='chosememberh22'>SINGLE CLASS DROP-IN</h2>
                            <p>You can buy this 1 day pass to join any group class you wish. There is no time limit, just choose the class you wish to attend.</p>
                        </div>
                        <h6 className='chosememberh62'>$19</h6>
                    </div>
                    <div className='chosememberone2' onClick={handleShow}>
                        <div className='chosemembertwo2'>
                            <h2 className='chosememberh22'>SINGLE  DROP-IN</h2>
                            <p>You can buy this 1 day pass to get an idea if our gym is the right fit for you. You can choose any group class to join, you can use all amenities all day long.</p>
                        </div>
                        <h6 className='chosememberh62'>$29</h6>
                    </div>
                    <div className='chosememberone2' onClick={handleShow}>
                        <div className='chosemembertwo2'>
                            <h2 className='chosememberh22'>12 MONTHS MEMBERSHIP</h2>
                            <p>12 month membership card will give you access to all our awesome amenities, spaces and gorup classes. There is no time limit, you can come and go whenever you like.</p>
                        </div>
                        <h6 className='chosememberh62'>$1199</h6>
                    </div>
                    <div className='chosememberone2' onClick={handleShow}>
                        <div className='chosemembertwo2'>
                            <h2 className='chosememberh22'>24 MONTHS MEMBERSHIP</h2>
                            <p>24 month membership card will give you access to all our awesome amenities, spaces and gorup classes. There is no time limit, you can come and go whenever you like.</p>
                        </div>
                        <h6 className='chosememberh62'>$2199</h6>
                    </div>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <div className='modalcon1c2'>
                                <Modal.Title>BOOK A TOUR</Modal.Title>
                                <h5>Please fill out the form and we will get back to you asap.</h5>
                            </div>
                        </Modal.Header>
                        <Modal.Body>
                            {isSubmitted ? (
                                <div className="success" style={{ color: 'green' }}>Form submitted successfully! &#10003;</div>
                            ) : (
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Name*</Form.Label>
                                        <Form.Control
                                            type="text"
                                            autoFocus
                                            {...register("name", { required: true })}
                                        />
                                        {errors.name && <span className="error" style={{ color: 'red' }}>This field is required</span>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="phone">
                                        <Form.Label>Phone Number*</Form.Label>
                                        <Form.Control
                                            type="number"
                                            {...register("phone", { required: true })}
                                        />
                                        {errors.phone && <span className="error" style={{ color: 'red' }}>This field is required</span>}
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
                                    <Form.Group className="mb-3" controlId="message">
                                        <Form.Label>Message*</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            {...register("message", { required: true })}
                                        />
                                        {errors.message && <span className="error" style={{ color: 'red' }}>This field is required</span>}
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Submit</Button>
                                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                                </Form>
                            )}
                        </Modal.Body>
                    </Modal>
                </div>

            </div>

        </div>
    )
}

export default ChooseMemberFitness