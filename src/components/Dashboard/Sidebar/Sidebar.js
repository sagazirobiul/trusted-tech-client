import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Siderbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCommentAlt, faUserPlus, faCog, faFileMedical, faList} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const { admin } = useContext(UserContext);
    return (
        <div className="sideBar">
            <div className="sideBrand">
                <div className="sideBrnIcon"><FontAwesomeIcon icon={faBuffer}/></div>
                <h2>Trusted <span className="navHighlight">Tech</span></h2>
            </div>
            <nav id="sidebar">
                <ul>
                    {admin ?
                        <>
                            <li>
                                <NavLink activeClassName="activePage" exact to="/dashboard">
                                    <FontAwesomeIcon icon={faList} className="iconC"/> Order list
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="activePage" to="/dashboard/addService">
                                    <FontAwesomeIcon icon={faFileMedical} className="iconC"/> Add Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="activePage" to="/dashboard/makeAdmin">
                                    <FontAwesomeIcon icon={faUserPlus} className="iconC"/> Make Admin
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="activePage" to="/dashboard/manageServices">
                                    <FontAwesomeIcon icon={faCog} className="iconC"/> Manage Services
                                </NavLink>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <NavLink activeClassName="activePage" exact to="/dashboard">
                                    <FontAwesomeIcon icon={faShoppingCart} className="iconC"/> Book
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="activePage" to="/dashboard/booking">
                                    <FontAwesomeIcon icon={faList} className="iconC"/> Booking List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="activePage" to="/dashboard/review">
                                    <FontAwesomeIcon icon={faCommentAlt} className="iconC"/> Review
                                </NavLink>
                            </li>
                        </>}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;