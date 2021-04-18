import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [imgURL, setImgURL] = useState(null)
    const [isDisabled, setIsDisabled] = useState(true)
    const onSubmit = data => {
        const serviceInfo = {
            name: data.name,
            price: data.price,
            description: data.description,
            img: imgURL
        }
        fetch('https://trusted-tech.herokuapp.com/addService',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(serviceInfo)
        })
        .then(res => res.json())
        .then(result => result && reset())
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="addProductForm">
                <h5 className="dTitle mb-3">Add Services</h5>
                <div className="row">
                    <div className="col-md-6">
                        <input className="form-control" {...register("name", { required: true })} placeholder="Service name"/>
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" {...register("price", { required: true })} placeholder="price"/>
                        {errors.price && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-12 mt-3">
                        <textarea className="form-control" {...register("description", { required: true })} placeholder="description"/>
                        {errors.description && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <input className="form-control mt-3" type="file" onChange={handleImgUpload} />
                <br/>
                <button type="submit" className="btn branBtn" disabled={isDisabled}>Submit</button>
            </form>
        </div>
    );
};

export default AddService;