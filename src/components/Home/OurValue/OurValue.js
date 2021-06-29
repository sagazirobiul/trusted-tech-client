import React from 'react';
import './OurValue.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam, faTasks, faHeadset, faUsers } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const OurValue = () => {

    const workDetails = [
        {title: 'Happy Clients', number: 542, icon: faSmileBeam, id:1},
        {title: 'Projects', number: 623, icon: faTasks, id:2},
        {title: 'Hours of Support', number: 1634, icon: faHeadset, id:3},
        {title: 'Hard Workers', number: 31, icon: faUsers, id:4}
    ]
    
    return (
        <section className="ourValue">
            <div className="row container mx-auto">
                {
                    workDetails.map(({title, number, icon, id}) => {
                        return(<div className="col-md-6 col-lg-3" key={id}>
                            <div className="ourValueDetails">
                                <span className={`valueIcon valueIcon${id}`}>
                                    <FontAwesomeIcon icon={icon}/>
                                </span>
                                <div>
                                    <p className="ourValueTitle">{title}</p>
                                    <h4 className="ourValueNumber">
                                        <CountUp
                                        end={`${number}`}
                                        start={0}
                                        duration={9}
                                        />
                                    </h4>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
        </section>
    );
};

export default OurValue;