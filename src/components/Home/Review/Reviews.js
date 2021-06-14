import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

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
        <section>
            <h4 className="my-5">TESTIMONIALS</h4>
            <Col md={11} className="mx-auto">
                    {/* {
                        reviews.map(review => {
                            return(
                                <SwiperSlide key={review._key}>
                                    <Review review={review}/>
                                </SwiperSlide>
                            )
                        })
                    } */}
            </Col>
        </section>
    );
};

export default Reviews;