import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import userImg from '../../../image/user.png'
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = ({review}) => {
    const [user, setUser] = useContext(UserContext)
    const {name, companyName, description, img} = review;
    return (
        <div className="col-md-4">
            <div className="review">
                <div className="d-flex">
                    { img ? <img src={img} alt=""/>:
                    <img src={`${userImg}`} alt=""/>}
                    <div>
                        <h6>{name}</h6>
                        <p>{companyName}</p>
                    </div>
                </div>
                <p>{description}</p>
                <div className="rate">
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </div>
            </div>
        </div>
    );
};

export default Review;