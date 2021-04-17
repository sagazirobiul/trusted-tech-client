import React from 'react';

const Review = ({review}) => {
    const {name, companyName, description} = review;
    return (
        <div className="col-md-4">
            <h2>{name}</h2>
        </div>
    );
};

export default Review;