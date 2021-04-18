import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://trusted-tech.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
    }, [])
    return (
        <div>
            <h4 className="ourValueTitle my-5">TESTIMONIALS</h4>
            <div className="row">
                {
                    reviews.map(review => <Review key={review._key} review={review}/>)
                }
            </div>
        </div>
    );
};

export default Reviews;