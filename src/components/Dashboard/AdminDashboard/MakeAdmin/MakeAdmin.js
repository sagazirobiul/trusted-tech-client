import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5050/addAdmin',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: data.email})
        })
        .then(res => res.json())
        .then(result => result && reset())
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email", { required: true })} placeholder="Email"/>
                {errors.email && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;