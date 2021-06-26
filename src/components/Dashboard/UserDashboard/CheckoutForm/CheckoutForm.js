import React from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const CheckoutForm = ({handleOrder, setMessage}) => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {  
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    if (error) {
      setMessage({error: error.message});
      console.log('[error]', error.message);
    } else {
      handleOrder(paymentMethod.id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="btn branBtn px-5 py-2 mt-3" type="submit" disabled={!stripe}>Pay</button>
    </form>
  );
};

export default CheckoutForm;