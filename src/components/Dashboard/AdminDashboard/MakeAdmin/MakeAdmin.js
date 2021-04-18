import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const onSubmit = data => {
        fetch('https://trusted-tech.herokuapp.com/addAdmin',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: data.email})
        })
        .then(res => res.json())
        .then(result => result && reset())
    };
    return (
        <>
        <div className="orderList">
            <h5 className="dTitle mb-3">Make Admin</h5>        
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-4">
                        <input className="form-control" {...register("email", { required: true })} placeholder="Email"/>
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="btn branBtn">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
};

export default MakeAdmin;