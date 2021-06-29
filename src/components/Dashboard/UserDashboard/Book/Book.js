import React, { useContext, useEffect, useState } from 'react';
import {UserContext} from '../../../../App'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Form, Col, Row, Toast } from 'react-bootstrap';
import './Book.css'
import axios from 'axios';

const Book = () => {
    const { selectedService , setSelectedService } = useContext(UserContext)
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5050/services`)
        .then(res => {
            setServices(res.data)
            if(!selectedService.name){
                setSelectedService(res.data[0])
            }
        })
    }, [selectedService.name, setSelectedService])

    const handleSelection = e => {
        const getService = services.find(({name}) => e.target.value === name)
        setSelectedService(getService)
    }

    const stripePromise = loadStripe('pk_test_51IeH1tCIW0BkrTRE8d8afxDs1DeFYm5stqp4qvLPKUpAUCNdfkEn1q1MOwS6ZLdgpNJNDfjIPs0aF29kZ2yeqTok00HDaxItJY');

    return (
        <div className="bookForm">
            
            <Row>
                <Col md={6} xs={12} className="my-3">
                    <Form.Label style={{ fontWeight: "bold" }}>Service</Form.Label>
                    <select class="form-select" onChange={handleSelection}>
                        {selectedService.name && 
                            <option className="activeService" value={selectedService.name}>{selectedService.name}</option>
                        }
                        {
                            services?.map(({id, name}) => <option key={id} value={name}>{name}</option>)
                        }
                    </select>
                </Col>
                <Col md={6} xs={12} className="my-3">
                        <Form.Label style={{ fontWeight: "bold" }}>Price</Form.Label>
                        <div className="priceInput">{selectedService.price}</div>
                </Col>
            </Row>

            <Elements stripe={stripePromise}>
                <CheckoutForm/>
            </Elements>
        </div>
    );
};

export default Book;