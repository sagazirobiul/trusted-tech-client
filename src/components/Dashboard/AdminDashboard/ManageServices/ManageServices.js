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
        <div>
            <h3>manage services</h3>
            <table className="w-100">
                <tr>
                    <th>Service Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                {
                    services.map(({_id, name, price}) => {
                        return(
                            <tr key={_id}>
                                <td>{name}</td>
                                <td>{price}</td>
                                <td><button onClick={() => handleDelete(_id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
};

export default ManageServices;