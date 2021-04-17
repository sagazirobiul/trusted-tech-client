import React, { useEffect, useState } from 'react';
import './Order.css'

const Order = ({order, handleAction}) => {
    const {_id, name, email, serviceName, status} = order;
    const setBackground = {
        color: '#FFFFFF',
        background: status === 'Pending' ? '#dc3545' : status === 'On going' ? '#0d6efd' :'#198754'
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{serviceName}</td>
            <td>
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
            </td>
        </tr>
    );
};

export default Order;