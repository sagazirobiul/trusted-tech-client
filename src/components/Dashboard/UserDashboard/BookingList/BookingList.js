import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';

const BookingList = () => {
    const [user, setUser] = useContext(UserContext)
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('http://localhost:5050/bookingList?email='+user.email)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[user.email])
    return (
        <div>
            <div className="row">
                {
                    bookings.map(({}))
                }
            </div>
        </div>
    );
};

export default BookingList;