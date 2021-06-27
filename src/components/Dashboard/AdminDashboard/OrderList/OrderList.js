import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Order from '../Order/Order';
import './OrderList.css'

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5050/orders')
        .then(res => setOrders(res.data))
    },[isUpdated])

    const handleAction = (id, status) => {
        setIsUpdated(true)
        axios.patch(`http://localhost:5050/statusUpdate/${id}`, {status: status })
        .then(res => res.data && setIsUpdated(false))
    }
    
    return (
        <div className="px-2">
            <div className="orderList">
                <Table hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <Order key={order._id} order={order} handleAction={handleAction}/>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default OrderList;