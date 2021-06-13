import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';

const AddReview = () => {
    const [user, setUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const review = {
            name: data.name,
            companyName: data.companyName,
            description: data.description,
            img: user.img,
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
            <form onSubmit={handleSubmit(onSubmit)} className="orderList">
                <h5 className="dTitle mb-3">Add Review</h5>
                <div className="row">
                    <div className="col-md-6">
                        <input className="form-control" {...register("name", { required: true })} placeholder="Your name"/>
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" {...register("companyName", { required: true })} placeholder="Company's name, Designation"/>
                        {errors.companyName && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-12 mt-3">
                        <textarea className="form-control" {...register("description", { required: true })} placeholder="description"/>
                        {errors.description && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <button type="submit" className="btn branBtn mt-3">Submit</button>
            </form>
        </div>
    );
};

export default AddReview;