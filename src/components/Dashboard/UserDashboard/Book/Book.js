import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {UserContext} from '../../../../App'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Book = () => {
    const [user, setUser] = useContext(UserContext)
    const {id} = useParams()
    const [message, setMessage] = useState({})
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5050/services/${id}`)
        .then(res => res.json())
        .then(data => {
            setService(data);
        })
    }, [id])
    const {name, price} = service;
    const stripePromise = loadStripe('pk_test_51IeH1tCIW0BkrTRE8d8afxDs1DeFYm5stqp4qvLPKUpAUCNdfkEn1q1MOwS6ZLdgpNJNDfjIPs0aF29kZ2yeqTok00HDaxItJY');
    const handleOrder = (paymentId) => {
        const orderData = {
            name: user.name,
            email: user.email,
            serviceName: name,
            price: price,
            status: 'Pending',
            paymentId: paymentId,
            time: new Date()
        }
        fetch('http://localhost:5050/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(data => data && setMessage({success: 'Your payment was successful'}))
    }
    return (
        <div>
            <h2>hello {name}</h2>
            <div className="row">
                <div className="col-md-4">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm handleOrder={handleOrder} setMessage={setMessage}/>
                    </Elements>
                </div>
            </div>
            {message.success ? <p className="text-success">{message.success}</p> :
            <p className="text-danger">{message.error}</p>
            }
        </div>
    );
};

export default Book;