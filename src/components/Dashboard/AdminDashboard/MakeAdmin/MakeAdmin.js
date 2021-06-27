import axios from 'axios';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5050/addAdmin',{email: data.email})
        .then(res => reset())
    };
    return (
        <div className="px-2">
            <Form onSubmit={handleSubmit(onSubmit)} className="makeAdmin">
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("email", { required: true })}
                                placeholder="email"
                            />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <button type="submit" className="mainBtn adminBtn">Submit</button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
};

export default MakeAdmin;