import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { UserContext } from '../../../App';
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuffer } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
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
            <Navbar className={`navbar navbar-expand-lg navbar-light ${isSticky ? "navStyle": "navDefault"}`} expand="lg">
                <Container>
                    <Navbar.Brand as={Link} exact to="/" onClick={() =>  window['scrollTo']({top: 0, behavior: 'smooth'})} className="navBrn">
                        <FontAwesomeIcon icon={faBuffer} className="brnIcon"/> Trusted <span className="navHighlight">Tech</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto mainNav" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link as={Link} exact to="/" className="nav-link" onClick={() =>  window['scrollTo']({top: 0, behavior: 'smooth'})}>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#services" className="nav-link">Services</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#testimonial" className="nav-link">Reviews</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#contact" className="nav-link">Contact Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/dashboard" className="nav-link">Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                {user.email || email ? <button className="logOutBtn" onClick={handleLogOut}>Log out</button>:
                                <Button as={Link} to="/login" className="loginBtn">Login</Button>}
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;