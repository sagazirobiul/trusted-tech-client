import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

const ManageServices = () => {
    const [services, setServices] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:5050/services')
        .then(res => {
            setServices(res.data);
            setIsDeleted(false)
        })
    }, [isDeleted])

    const handleDelete = (id) => {
        setIsDeleted(false)
        swal({
            title: "Are you sure?",
            text: "Are you sure! you want to delete this service?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then( wantDelete => {
            if (wantDelete) {
                const loading = toast.loading('deleting...Please wait!')
                axios.delete(`http://localhost:5050/delete/${id}`)
                .then(res => {
                    toast.dismiss(loading)
                    if(res){
                        setIsDeleted(true);
                        toast.success('Service has been deleted successfully!');
                    }
                    else{
                        toast.error('Something went wrong, please try again');
                    }
                })
                .catch(err => {
                    toast.dismiss(loading)
                    swal({
                        title: "Failed!",
                        text: 'Something went wrong, please try again',
                        icon: "error",
                      });
                })
            } 
          })
    }

    return (
        <div className="orderList">
            <Table hover width="100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(({_id, name, price, description}) => {
                            let des = description
                            let shortDes = des.split(' ').slice(0,5).join(' ')
                            return(
                                <tr>
                                    <td>{name}</td>
                                    <td>{price}</td>
                                    <td>{`${shortDes}...`}</td>
                                    <td>
                                        <Button variant="outline-success"> <FontAwesomeIcon icon={faEdit}/></Button>
                                        <Button className="ml-2" variant="outline-danger" onClick={() => handleDelete(_id)}> <FontAwesomeIcon icon={faTrashAlt}/></Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageServices;