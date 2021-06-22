import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import PopOver from '../../Shared/PopOver/PopOver';
import AdminDashboard from '../AdminDashboard/AdminDashboard/AdminDashboard';
import Sidebar from '../Sidebar/Sidebar';
import UserDashboard from '../UserDashboard/UserDashboard/UserDashboard';
import './Dashboard.css';

const Dashboard= () => {
    const [user, setUser, admin, setAdmin] = useContext(UserContext);
    const email = sessionStorage.getItem('email')
    const [sideToggle, setSideToggle] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5050/admin?email='+user.email ||+email)
        .then(res => res.json())
        .then(data => setAdmin(data))
    },[user.email, email, admin, setAdmin])
    return (
        <div id="dashboard">
            <div id="sidebar" className={ sideToggle ? "active" : "" }>
                <Sidebar/>
            </div>
            <div id="pageContent">
                <div className="dashBoardHeader">
                    <div className="d-flex">
                        <div id="nav-icon"
                        className={sideToggle ? "menu-btn" : "menu-btn open"}
                        onClick={() => setSideToggle(!sideToggle)}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <h3>Hello</h3>
                    </div>
                    <PopOver/>
                </div>
                {
                    admin ? <AdminDashboard/> : <UserDashboard/>
                }
            </div>
        </div>
    );
};

export default Dashboard;