import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        // fetch('https://trusted-tech.herokuapp.com/services')
        fetch('http://localhost:5050/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    }, [])
    return (
        <div className="services">
            <h4 className="miniTitle text-center">SERVICES</h4>
            {services.length === 0 && <div className="spinner text-center"><Spinner/></div>}
            <h5 className="text-center my-3">We provide professional online services</h5>
            <div className="row mt-4 container mx-auto">
                {
                    services.map(service => <Service key={service._key} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;