import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

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
            <h2 className="text-info my-5 pb-4 text-center">TESTIMONIALS</h2>
            <div className="row">
                {
                    reviews.map(review => <Review key={review._key} review={review}/>)
                }
            </div>
        </div>
    );
};

export default Reviews;