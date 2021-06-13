import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5050/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
            setIsDeleted(false)
        })
    }, [isDeleted])
    const handleDelete = (id) => {
        fetch(`http://localhost:5050/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => setIsDeleted(data))
    }
    return (
        <div className="orderList">
            <h5 className="dTitle mb-3">Order List</h5>
            <div className="d-flex justify-content-between tableTitle">
                <p>Name</p>
                <p>Price</p>
                <p>Action</p>
            </div>
                {
                    services.map(({_id, name, price}) => {
                        return(
                            <div className="d-flex justify-content-between mt-2" key={_id}>
                                <p>{name}</p>
                                <p>{price}</p>
                                <button className="btn btn-danger" onClick={() => handleDelete(_id)}>Delete</button>
                            </div>
                        )
                    })
                }
        </div>
    );
};

export default ManageServices;