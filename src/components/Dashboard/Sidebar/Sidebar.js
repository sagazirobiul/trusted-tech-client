import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <li><NavLink to="/dashboard/book">Book</NavLink></li>
            <li><NavLink to="/dashboard/booking">Booking List</NavLink></li>
            <li><NavLink to="/dashboard/review">Review</NavLink></li>
            <li><NavLink exact to="/dashboard">Order list</NavLink></li>
            <li><NavLink to="/dashboard/addService">Add Service</NavLink></li>
            <li><NavLink to="/dashboard/makeAdmin">Make Admin</NavLink></li>
            <li><NavLink to="/dashboard/manageServices">Manage Services</NavLink></li>
        </div>
    );
};

export default Sidebar;