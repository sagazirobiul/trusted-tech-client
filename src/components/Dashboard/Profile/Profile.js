import React, { useContext } from 'react';
import { Button, Col } from 'react-bootstrap';
import { UserContext } from '../../../App';
import './Profile.css'

const Profile = () => {
    const {user: {name, email, img}, serUser} = useContext(UserContext)
    return (
        <Col md={5} className="mx-auto">
            <div className="profile">
                <h2>Profile</h2>
                <div className="profileInfo">
                    <img src={img} alt="" />
                    <h3>{name}</h3>
                    <h5>{email}</h5>
                    <Button>LogOut</Button>
                </div>
            </div>
        </Col>
    );
};

export default Profile;