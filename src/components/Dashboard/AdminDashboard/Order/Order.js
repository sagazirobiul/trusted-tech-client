import React from 'react';
import './Order.css'

const Order = ({order, handleAction}) => {
    const {_id, name, email, serviceName, status} = order;
    const setBackground = {
        color: '#FFFFFF',
        background: status === 'Pending' ? '#dc3545' : status === 'On going' ? '#0d6efd' :'#198754'
    }
    return (
        <div className="d-flex justify-content-between">
            <p>{name}</p>
            <p>{email}</p>
            <p>{serviceName}</p>
            <div class="dropdown statusBar">
                <button style={setBackground} className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {status}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li onClick={() => handleAction(_id, "Pending")} className="dropdown-item pending">Pending</li>
                    <li onClick={() => handleAction(_id, "On going")} className="dropdown-item ongoing">On going</li>
                    <li onClick={() => handleAction(_id, "Done")} className="dropdown-item done">Done</li>
                </ul>
            </div>
        </div>
    );
};

export default Order;