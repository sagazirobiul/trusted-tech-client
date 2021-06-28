import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import TableLoader from '../../../Shared/TableLoader/TableLoader';
import AddService from '../AddService/AddServices';

const ManageServices = () => {
    const [services, setServices] = useState([])
    const [isUpdated, setIsUpdated] = useState(false)
    const [edit, setEdit] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5050/services')
        .then(res => {
            setServices(res.data);
            setIsUpdated(false)
        })
    }, [isUpdated, edit])
    // swal("Good job!", "You clicked the button!", "info");
    const handleDelete = (id) => {
        setIsUpdated(false)
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
                        setIsUpdated(true);
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
        <>
        { edit ? 
            <AddService edit={edit} setEdit={setEdit} services={services}/> 
            : 
            services.length === 0 ?
            <TableLoader/>
            :
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
                                            <Button variant="outline-success" onClick={() => setEdit(_id)}> <FontAwesomeIcon icon={faEdit}/> Edit</Button>
                                            <Button className="ml-2" variant="outline-danger" onClick={() => handleDelete(_id)}> <FontAwesomeIcon icon={faTrashAlt}/> Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        }
        </>
    );
};

export default ManageServices;