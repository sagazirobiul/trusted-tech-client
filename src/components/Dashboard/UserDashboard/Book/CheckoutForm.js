import React, { useMemo } from 'react'
import {
  CardElement, 
  useStripe, 
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from '@stripe/react-stripe-js';
import swal from 'sweetalert';
import { Form, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
import { useContext } from 'react';
import toast from 'react-hot-toast';


const useOptions = () => {
  const options = useMemo(() => ({
      style: {
          base: {
              fontSize: "1.2rem",
              lineHeight: "2",
              color: "#495057",
              letterSpacing: "0.025em",
              "::placeholder": {
                  color: "#aab7c4"
              }
          },
          invalid: {
              color: "#9e2146"
          }
      }
  }), []);
  return options;
};

const CheckoutForm = () => {
  const {user:{name, email }} = useContext(UserContext);
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
    if (!stripe || !elements) {
      return;
    }
    const loading = toast.loading('Please wait...!');

    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardNumberElement)
    });

    if (error) {
        toast.dismiss(loading);
        return swal("Failed!", error.message, "error", { dangerMode: true });
    } 
    else {
      // handleOrder(paymentMethod.id);
    }
  };

return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
          <Col md={6} xs={12}>
            <Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>Your Name</Form.Label>
                <Form.Control
                    type="text"
                    defaultValue={name}
                    {...register("name", { required: true })}
                    placeholder="Your Name" />
            </Form.Group>

            <Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                <Form.Control
                    type="text"
                    defaultValue={email}
                    {...register("email", { required: true })}
                    placeholder="Email Address" />
            </Form.Group>

            <Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>Address</Form.Label>
                <Form.Control
                    type="text"
                    {...register("address", { required: true })}
                    placeholder="Address" />
            </Form.Group>
          </Col>
          <Col md={6} xs={12}>
              <div>
                  <Form.Label style={{ fontWeight: "bold" }}>Card Number</Form.Label>
                  <CardNumberElement className="form-control" options={options} />
              </div>
              <div className="mt-3">
                  <Form.Label style={{ fontWeight: "bold" }}>Expiration Date</Form.Label>
                  <CardExpiryElement className="form-control" options={options} />
              </div>
              <div className="mt-3">
                  <Form.Label style={{ fontWeight: "bold" }}>CVC</Form.Label>
                  <CardCvcElement className="form-control" options={options} />
              </div>
            </Col>
        </Row>
        <button className="mainBtn" type="submit" disabled={!stripe}>Pay Now</button>
    </Form>
  );
};

export default CheckoutForm;