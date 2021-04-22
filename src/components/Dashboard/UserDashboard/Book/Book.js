import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {UserContext} from '../../../../App'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Book = () => {
    const [user, setUser] = useContext(UserContext)
    const userEmail = sessionStorage.getItem('email')
    const userName = sessionStorage.getItem('name')
    const {id} = useParams()
    const [message, setMessage] = useState({})
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`https://trusted-tech.herokuapp.com/services/${id}`)
        .then(res => res.json())
        .then(data => {
            setService(data);
        })
    }, [id])
    const {name, price, description, img} = service;
    const stripePromise = loadStripe('pk_test_51IeH1tCIW0BkrTRE8d8afxDs1DeFYm5stqp4qvLPKUpAUCNdfkEn1q1MOwS6ZLdgpNJNDfjIPs0aF29kZ2yeqTok00HDaxItJY');
    const handleOrder = (paymentId) => {
        const orderData = {
            name: userName,
            email: userEmail,
            serviceName: name,
            price: price,
            status: 'Pending',
            description: description,
            paymentId: paymentId,
            img:img,
            time: new Date()
        }
        fetch('https://trusted-tech.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(data => data && setMessage({success: 'Your payment was successful'}))
    }
    return (
        <div>
        {
            name ? <div className="row">
                <div className="col-md-8 mt-2">
                    <div className="orderList">
                        <p><span className="nameHighlight">NAME</span> : {user.name || userName}</p>
                        <p><span className="nameHighlight">EMAIL</span> : {user.email || userEmail}</p>
                        <p><span className="nameHighlight">SELECTED SERVICE</span>: {name}</p>
                        <p>Your Service charged Will be <span className="nameHighlight">${price}</span></p>
                    </div>
                </div>
                <div className="col-md-4 mt-2">
                    <div className="orderList">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm handleOrder={handleOrder} setMessage={setMessage}/>
                        </Elements>
                    </div>
                    {message.success ? <p className="text-success">{message.success}</p> :
                    <p className="text-danger">{message.error}</p>
                    }
                </div>
            </div> : <div className="orderList">
                <div className="text-danger">There has no selected service. please go the home and select your service.!!</div>
                <Button as={Link} to="/" className="btn branBtn mt-2">Go Home</Button>
            </div>
        }
            
        </div>
    );
};

export default Book;