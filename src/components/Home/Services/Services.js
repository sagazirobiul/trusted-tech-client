import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        // fetch('https://trusted-tech.herokuapp.com/services')
        axios('http://localhost:5050/services')
        .then(res => setServices(res.data))
    }, [])
    return (
        <section id="services" className="services">
            <h4 className="miniTitle text-center">SERVICES</h4>
            <div className="text-center">
                <h5 className="text-center sectionTitle">PROVIDE AWESOME SERVICE</h5>
            </div>
            {services.length === 0 && <div className="spinner text-center"><Spinner/></div>}
            <div className="row mt-4 container mx-auto">
                {
                    services.map(service => <Service key={service._key} service={service}/>)
                }
            </div>
        </section>
    );
};

export default Services;