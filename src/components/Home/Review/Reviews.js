import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Review from './Review';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from 'swiper/core'

const Reviews = () => {
    SwiperCore.use([Pagination, Autoplay]);
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
                <Swiper 
                    pagination={{ clickable: true }}
                    slidesPerView={3}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 3,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={10}
                    >
                    {
                        reviews.map(review => {
                            return(
                                <SwiperSlide>
                                    <Review review={review} key={review._key}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Col>
        </section>
    );
};

export default Reviews;