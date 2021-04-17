import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, name, price, description, img} = service;
    return (
        <div className="col-md-4">
        <Link to={`/dashboard/book/${_id}`}>
            <h2>{name}</h2>
        </Link>
        </div>
    );
};

export default Service;