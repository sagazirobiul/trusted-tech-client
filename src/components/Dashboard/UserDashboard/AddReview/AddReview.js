import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const review = {
            name: data.name,
            companyName: data.companyName,
            description: data.description,
        }
        fetch('http://localhost:5050/addReview',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(result => result && reset())
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="Your name"/>
                {errors.name && <span>This field is required</span>}
                <br/>
                <input {...register("companyName", { required: true })} placeholder="Company's name, Designation"/>
                {errors.companyName && <span>This field is required</span>}
                <br/>
                <textarea {...register("description", { required: true })} placeholder="description"/>
                {errors.description && <span>This field is required</span>}
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;