import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import PopOver from '../../Shared/PopOver/PopOver';
import AdminDashboard from '../AdminDashboard/AdminDashboard/AdminDashboard';
import Sidebar from '../Sidebar/Sidebar';
import UserDashboard from '../UserDashboard/UserDashboard/UserDashboard';
import './Dashboard.css';

const Dashboard= () => {
    const { user, admin, setAdmin } = useContext(UserContext);
    const [sideToggle, setSideToggle] = useState(false)
    const [title, setTitle] = useState('Trusted Tech')

    useEffect(() => {
        axios.get(`http://localhost:5050/admin?email=${user.email}`)
        .then(res => {
            if(res.data.length > 0){
                setAdmin(true)
            }
        })
    },[user.email, admin, setAdmin])

    return (
        <div id="dashboard">
            <div id="sidebar" className={ sideToggle ? "active" : "" }>
                <Sidebar setTitle={setTitle}/>
            </div>
            <div id="pageContent">
                <div className="dashBoardHeader">
                    <div className="d-flex align-items-center">
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
                        <h3>{title}</h3>
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