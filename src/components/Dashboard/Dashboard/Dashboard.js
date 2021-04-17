import React from 'react';
import AdminDashboard from '../AdminDashboard/AdminDashboard/AdminDashboard';
import Sidebar from '../Sidebar/Sidebar';
import UserDashboard from '../UserDashboard/UserDashboard/UserDashboard';

const Dashboard= () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-10">
                <UserDashboard/>
                <AdminDashboard/>
            </div>
        </div>
    );
};

export default Dashboard;