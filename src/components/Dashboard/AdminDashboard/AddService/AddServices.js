import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const [imgURL, setImgURL] = useState(null)
    const [isDisabled, setIsDisabled] = useState(true)

    const onSubmit = data => {
        const serviceInfo = {
            name: data.name,
            price: data.price,
            description: data.description,
            img: imgURL
        }
        axios.get('http://localhost:5050/addService', serviceInfo)
        .then(res => res.data && reset())
    }

    const handleImgUpload = event => {
        setIsDisabled(true)
        const imgData = new FormData();
        imgData.set('key', '158d6aaa1f29311c98e50373ddc8e3d6');
        imgData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
        .then( response => {
            setImgURL(response.data.data.url)
            setIsDisabled(false)
        })
        .catch( error => {
            console.log(error);
        });
    }
    return (
        <div className="px-2">
            <Form onSubmit={handleSubmit(onSubmit)} className="addServiceForm">
                <Row className="justify-content-center px-4">
                    <Form.Group as={Col} md={7}>
                        <Form.Label style={{ fontWeight: "bold" }}>Service Name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={ ""}
                            {...register("name", { required: true })}
                            placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group as={Col} md={5}>
                        <Form.Label style={{ fontWeight: "bold" }}>Price</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={""}
                            {...register("price", { required: true })}
                            placeholder="Price" />
                    </Form.Group>
                    <Form.Group as={Col} md={7}>
                        <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
                        <Form.Control
                            style={{ height: "10rem" }}
                            type="text"
                            defaultValue={""}
                            as="textarea"
                            {...register("description", { required: true })}
                            placeholder="Description" />
                    </Form.Group>
                    <Col md={5}>
                        <Form.Label style={{ fontWeight: "bold", display: "block"}}>Image</Form.Label>
                        <div class="uploadBtnWrapper">
                            <button class="uploadBtn"> <FontAwesomeIcon icon={faCloudUploadAlt}/> Upload image</button>
                            <input type="file" onChange={handleImgUpload}/>
                        </div>
                    </Col>
                </Row>
                <div className="text-center mt-3">
                    <button type="submit" className="mainBtn" disabled={isDisabled}>Submit</button>
                </div>
            </Form>
        </div>
    );
};

export default AddService;