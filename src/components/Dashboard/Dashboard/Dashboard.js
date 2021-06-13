import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../App';
import AdminDashboard from '../AdminDashboard/AdminDashboard/AdminDashboard';
import Sidebar from '../Sidebar/Sidebar';
import UserDashboard from '../UserDashboard/UserDashboard/UserDashboard';
import './Dashboard.css'

const Dashboard= () => {
    const [user, setUser, admin, setAdmin] = useContext(UserContext);
    const email = sessionStorage.getItem('email')
    useEffect(() => {
        fetch('http://localhost:5050/admin?email='+user.email ||+email)
        .then(res => res.json())
        .then(data => setAdmin(data))
    },[user.email, email, admin, setAdmin])
    return (
        <div className="dashboard">
            <div className="row w-100">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <div className="pageContent">
                        {
                            admin ? <AdminDashboard/> : <UserDashboard/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;