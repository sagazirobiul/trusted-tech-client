import React from 'react';
import { Col, Form, FormControl, Row } from 'react-bootstrap';
import './Contact.css';
import contactImg from '../../../image/contact.svg';
import swal from 'sweetalert'

const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
        swal("Thank You!", "We appreciate you contacting us!", "success");
    }
    return (
        <section id="contact">
            <Col md={11} className="mx-auto">
                <Row>
                    <Col md={6}>
                        <form onSubmit={handleSubmit} className="contactForm">
                            <h4 className="miniTitle">CONTACT US</h4>
                            <h5 className="sectionTitle">GET IN TOUCH</h5>
                            <Row>
                                <Col md={6}>
                                    <input placeholder="Your Name" type="text" required/>
                                </Col>
                                <Col md={6}>
                                    <input placeholder="Your Email" type="text" required/>
                                </Col>
                                <Col md={12}>
                                    <input placeholder="Subject" type="text" required/>
                                </Col>
                                <Col md={12}>
                                    <textarea placeholder="Your Message..." required></textarea>
                                </Col>
                            </Row>
                            <button className="branBtn" type="submit">Submit Now</button>
                        </form>
                    </Col>
                    <Col md={6}>
                        <img src={`${contactImg}`} alt="" className="img-fluid"/>
                    </Col>
                </Row>
            </Col>
        </section>
    );
};

export default Contact;