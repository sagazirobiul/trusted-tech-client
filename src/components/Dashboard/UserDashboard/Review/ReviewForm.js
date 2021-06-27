import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Button, Col, Form, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import { UserContext } from '../../../../App';

const ReviewForm = ({setIsUpdated}) => {
    const {user: {email, img}} = useContext(UserContext)
    const {id} = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [review, setReview] = useState({});
    const {name, address, description} = review;
    useEffect(() => {
        axios(`http://localhost:5050/userReview/${id}`)
        .then(res => {
            setReview(res.data[0]);
        })
    }, [id])
    
    const history = useHistory();
    const onSubmit = data => {
        const loading = toast.loading('Uploading...Please wait!');
        const reviewData = {...data};
            reviewData.email = review.email || email;
            reviewData.img = review.img || img;
        if(id){
            axios.patch(`http://localhost:5050/updateReview/${id}`, reviewData)
            .then(res => {
                if(res){
                    toast.dismiss(loading);
                    if(
                        data.name === name &&
                        data.address === address &&
                        data.description === description
                        ){
                            toast.error("You haven't changed anything")
                        }else{
                            toast.success('your review was successful updated!');
                        }
                    history.push('/dashboard/review');
                }
            })
        }else {
            setIsUpdated(false)
            axios.post('http://localhost:5050/addReview', reviewData)
            .then(res => {
                if(res){
                    setIsUpdated(true)
                    toast.dismiss(loading);
                    swal("Success!", "Your review has been submitted successfully. We appreciate your contirbution.", "success");
                }
            })
        }
        reset();
    }
    return (
        <section className='px-3'>
            <div className="mx-auto reviewForm">
                <Form onSubmit={handleSubmit(onSubmit)} className="w-100">
                        <Row className="justify-content-center px-4">
                            <Form.Group as={Col} md={12}>
                                <Form.Label style={{ fontWeight: "bold" }}>Your Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={name || ""}
                                    {...register("name", { required: true })}
                                    placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group as={Col} md={12}>
                                <Form.Label style={{ fontWeight: "bold" }}>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={address || ""}
                                    {...register("address", { required: true })}
                                    placeholder="Address" />
                            </Form.Group>
                            <Form.Group as={Col} md={12}>
                                <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
                                <Form.Control
                                    style={{ height: "10rem" }}
                                    type="text"
                                    defaultValue={description || ""}
                                    as="textarea"
                                    {...register("description", { required: true })}
                                    placeholder="Description" />
                            </Form.Group>
                        </Row>
                        <div className="text-center mt-1">
                            <button type="submit" className="mainBtn">
                                submit
                            </button>
                        </div>
                </Form>
            </div>
        </section>
    );
};

export default ReviewForm;