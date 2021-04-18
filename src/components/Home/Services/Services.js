import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://trusted-tech.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    }, [])
    return (
        <div>
            <h4 className="ourValueTitle mt-5 pt-5">SERVICES</h4>
            {services.length === 0 && <div className="spinner text-center"><Spinner/></div>}
            <h5 className="text-center my-3">We provide professional online services</h5>
            <div className="row mt-4">
                {
                    services.map(service => <Service key={service._key} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;