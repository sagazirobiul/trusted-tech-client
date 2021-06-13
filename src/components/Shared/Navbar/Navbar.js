import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { UserContext } from '../../../App';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTenge } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
    const [user, setUser] = useContext(UserContext)
    const [isSticky, setSticky] = useState(false)
    const email = sessionStorage.getItem('email')
    const handleLogOut = () => {
        setUser({});
        sessionStorage.clear();
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])
   
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-light ${isSticky ? "navStyle": "navDefault"}`}>
                <div className="container">
                    <NavLink className="nav-brand navBrand" to="/"><FontAwesomeIcon icon={faTenge} className="mainLogo"/>rusted <FontAwesomeIcon className="mainLogo" icon={faTenge} />ech</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navItems">
                            <li className="nav-item">
                                <NavLink exact to="/" activeClassName="selected" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/dashboard" activeClassName="selected" className="nav-link">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                {user.email || email ? <button className="logOutBtn" onClick={handleLogOut}>Log out</button>:
                                <NavLink to="/login" activeClassName="selected" className="nav-link">Login</NavLink>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;