import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Siderbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTenge, faShoppingCart, faListAlt, faCommentAlt, faUserPlus, faThLarge, faPlus} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [user, setUser, admin, setAdmin] = useContext(UserContext);
    return (
        <div className="sideBar">
            <div className="text-center dashTitle">
                <li><NavLink to="/"><FontAwesomeIcon icon={faTenge} className="DashLogo"/>rusted <FontAwesomeIcon className="DashLogo" icon={faTenge} />ech</NavLink></li>
            </div>
            {
                admin ? <>
                    <li><NavLink activeClassName="activePage" exact to="/dashboard"><FontAwesomeIcon icon={faListAlt} className="iconC"/> Order list</NavLink></li>
                    <li><NavLink activeClassName="activePage" to="/dashboard/addService"><FontAwesomeIcon icon={faPlus} className="iconC"/> Add Service</NavLink></li>
                    <li><NavLink activeClassName="activePage" to="/dashboard/makeAdmin"><FontAwesomeIcon icon={faUserPlus} className="iconC"/> Make Admin</NavLink></li>
                    <li><NavLink activeClassName="activePage" to="/dashboard/manageServices"><FontAwesomeIcon icon={faThLarge} className="iconC"/> Manage Services</NavLink></li>

                </>:
                <>
                    <li><NavLink activeClassName="activePage" exact to="/dashboard"><FontAwesomeIcon icon={faShoppingCart} className="iconC"/> Book</NavLink></li>
                    <li><NavLink activeClassName="activePage" to="/dashboard/booking"><FontAwesomeIcon icon={faListAlt} className="iconC"/> Booking List</NavLink></li>
                    <li><NavLink activeClassName="activePage" to="/dashboard/review"><FontAwesomeIcon icon={faCommentAlt} className="iconC"/> Review</NavLink></li>
                </>
            }
        </div>
    );
};

export default Sidebar;