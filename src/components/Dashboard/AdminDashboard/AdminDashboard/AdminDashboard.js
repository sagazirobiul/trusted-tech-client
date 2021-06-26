import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from '../../Profile/Profile';
import AddService from '../AddService/AddServices';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';
import OrderList from '../OrderList/OrderList';

const AdminDashboard = () => {
    return (
        <Switch>
            <Route exact path="/dashboard/profile"><Profile/></Route>
            <Route exact path="/dashboard/orderList"><OrderList/></Route>
            <Route path="/dashboard/addService"><AddService/></Route>
            <Route path="/dashboard/makeAdmin"><MakeAdmin/></Route>
            <Route path="/dashboard/manageServices"><ManageServices/></Route>
        </Switch>
    );
};

export default AdminDashboard;