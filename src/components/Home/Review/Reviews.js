import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5050/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
    }, [])
    return (
        <div>
            <h4 className="my-5">TESTIMONIALS</h4>
            <div className="row w-100">
                {
                    reviews.map(review => <Review key={review._key} review={review}/>)
                }
            </div>
        </div>
    );
};

export default Reviews;