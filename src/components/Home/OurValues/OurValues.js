import React from 'react';
import customer from '../../../image/lcustomar.jpg'
import innovation from '../../../image/innovation.jpg'
import simplicity from '../../../image/simplicity.png'
import OurValue from '../OurValue/OurValue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faTasks, faHeadset, faUsers } from '@fortawesome/free-solid-svg-icons'
import './OurValues.css'

const OurValues = () => {
    const values = [
        {title: "LISTENING TO THE CUSTOMER", img: customer, id: 1},
        {title: "INNOVATION", img: innovation, id: 2},
        {title: "SIMPLICITY", img: simplicity, id: 3}
    ]
    const workDetails = [
        {title: 'Happy Clients', number: 342, icon: faSmile, id:1},
        {title: 'Projects', number: 623, icon: faTasks, id:2},
        {title: 'Hours of Support', number: 1634, icon: faHeadset, id:3},
        {title: 'Hard Workers', number: 18, icon: faUsers, id:4}
    ]
    return (
        <div className="my-5 pb-5">
            <h4 className="ourValueTitle mt-5">OUR VALUES</h4>
            <h5 className="text-center my-3">Passion is at the heart of our company</h5>
            <div className="row mt-5">
                {
                    values.map(value => <OurValue value={value} key={value.id}/>)
                }
                {
                    workDetails.map(({title, number, icon, id}) => {
                        return(<div className="col-md-3 mt-5" key={id}>
                            <div className="workDetails d-flex align-items-center">
                                <FontAwesomeIcon icon={icon} className="mainLogo detailIcon"/>
                                <div>
                                    <h4 className="ourValueTitle">{number}</h4>
                                    <p className="fw-bold">{title}</p>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
    );
};

export default OurValues;