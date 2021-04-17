import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';

const OrderList = () => {
    const [orders, setOrders] = useState([])
    const [isUpdated, setIsUpdated] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5050/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[isUpdated])
    const handleAction = (id, status) => {
        setIsUpdated(true)
        fetch(`http://localhost:5050/statusUpdate/${id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: status })
        })
        .then(res => res.json())
        .then(data => data && setIsUpdated(false))
    }
    return (
        <div>
            <table className="w-100">
                <tr>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Service</th>
                    <th>Status</th>
                </tr>
                {
                    orders.map(order => <Order order={order} handleAction={handleAction}/>)
                }
            </table>
        </div>
    );
};

export default OrderList;