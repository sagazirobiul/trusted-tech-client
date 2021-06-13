import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
import {UserContext} from '../../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

const Service = ({service}) => {
    const [user, setUser, admin, setAdmin] = useContext(UserContext)
    const {_id, name, price, description, img} = service;
    return (<div className="col-md-4">
            <div className="service">
                <div className="text-center">
                    <img src={`${img}`} alt=""/>
                </div>
                <h4 className="serviceName">{name}</h4>
                <p>{description}</p>
                <Link className="serviceLink" to={admin ? `/dashboard` : `/dashboard/book/${_id}`}>
                    <button>ok</button>
                </Link>
            </div>
    </div>);
};

export default Service;