import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5050/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    }, [])
    return (
        <div>
            <h2 className="text-info my-5 pb-4 text-center">SERVICES</h2>
            <div className="row">
                {
                    services.map(service => <Service key={service._key} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;