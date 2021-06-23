import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { UserContext } from '../../../../App';
import userImg from '../../../../image/user.svg'

const AddReview = () => {
    const { user } = useContext(UserContext);
    const [review, setReviews] = useState([])
    const {email, img} = user;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = ({name, address, description}) => {
        const review = {
            name: name,
            email: email,
            address: address,
            description: description,
            img: img || userImg,
        }
        axios.post('http://localhost:5050/addReview', review)
        .then(res => {
            if(res){
                swal("Success!", "Your review has been submitted successfully. We appreciate your contirbution.", "success");
                reset();
            }
        })
    }
    useEffect(() => {
        axios(`http://localhost:5050/userReview?email=${email}`)
        .then(res => {
            console.log(res);
        })
    }, [email])
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
                        <input className="form-control" {...register("address", { required: true })} placeholder="Your Address"/>
                        {errors.address && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-12 mt-3">
                        <textarea className="form-control" {...register("description", { required: true })} placeholder="Description"/>
                        {errors.description && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <button type="submit" className="dBranBtn mt-3">Submit</button>
            </form>
        </div>
    );
};

export default AddReview;