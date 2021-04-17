import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [imgURL, setImgURL] = useState(null)
    const onSubmit = data => {
        const serviceInfo = {
            name: data.name,
            price: data.price,
            description: data.description,
            img: imgURL
        }
        fetch('http://localhost:5050/addService',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(serviceInfo)
        })
        .then(res => res.json())
        .then(result => result && reset())
    }
    const handleImgUpload = event => {
        const imgData = new FormData();
        imgData.set('key', '158d6aaa1f29311c98e50373ddc8e3d6');
        imgData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
        .then( response => {
            setImgURL(response.data.data.url)
            alert('Your image update successfully')
        })
        .catch( error => {
            console.log(error);
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="Service name"/>
                {errors.name && <span>This field is required</span>}
                <br/>
                <input {...register("price", { required: true })} placeholder="price"/>
                {errors.price && <span>This field is required</span>}
                <br/>
                <textarea {...register("description", { required: true })} placeholder="description"/>
                {errors.description && <span>This field is required</span>}
                <br/>
                <input type="file" onChange={handleImgUpload} />
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;