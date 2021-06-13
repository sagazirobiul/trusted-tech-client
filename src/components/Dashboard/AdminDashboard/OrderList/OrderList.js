import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import './OrderList.css'

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
        <div className="orderList">
            <h5 className="dTitle mb-3">Order List</h5>
            <div className="d-flex justify-content-between tableTitle">
                <p>Name</p>
                <p>Email ID</p>
                <p>Service</p>
                <p>Status</p>
            </div>
            <table className="w-100 mt-3">
                {
                    orders.map(order => <Order order={order} handleAction={handleAction}/>)
                }
            </table>
        </div>
    );
};

export default OrderList;