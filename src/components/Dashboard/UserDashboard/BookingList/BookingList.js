import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Spinner from '../../../Shared/Spinner/Spinner';
import './BookingList.css'

const BookingList = () => {
    const [user, setUser] = useContext(UserContext)
    const email = sessionStorage.getItem('email')
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('https://trusted-tech.herokuapp.com/bookingList?email='+user.email || email)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[user.email, email])
    return (
        <div>
            {bookings.length === 0 && <div className="mt-5 p-5 text-center"><Spinner/></div>}
            <div className="row">
                {
                    bookings.map(({_id, serviceName,status,description,img}) => {
                        return(<div className="col-md-4" key={_id}>
                            <div className="bookingList">
                                <div className="d-flex justify-content-between">
                                    <img src={img} alt=""/>
                                    <div>
                                        <p className="serviceState" style={{color: '#fff', background: status === 'Pending' ? '#dc3545' : status === 'On going' ? '#0d6efd' :'#198754'}}>{status}</p>
                                    </div>
                                </div>
                                <h6>{serviceName}</h6>
                                <p>{description}</p>
                            </div>
                            
                        </div>)
                    })
                }
            </div>
        </div>
    );
};

export default BookingList;