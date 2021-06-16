import React from 'react';
import userImg from '../../../image/user.svg'
import './Review.css'

const Review = ({review}) => {
    const {name, companyName, description, img} = review;
    return (
        <div className="review">
            { img ? <img src={img} alt=""/>:
            <img src={`${userImg}`} alt=""/>}
            <h5 className="testimonialName">{name}</h5>
            <h6 className="testimonialAddress">{companyName}</h6>
            <p>{description}</p>
        </div>
    );
};

export default Review;