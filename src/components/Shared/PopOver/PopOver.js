import React, { useContext } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Button, Overlay } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover'
import { UserContext } from '../../../App';
import userImg from '../../../image/user.svg'
import './PopOver.css'

const PopOver = () => {
    const [user, setUser] = useContext(UserContext)
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    const handleLogOut = () => {
        setUser({});
        localStorage.clear();
    }
    return (
        <div ref={ref}>
            <img src={`${user.img ? user.img : userImg}`} alt="" onClick={handleClick} className="popImg"/>
            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={50}
            >
                <Popover id="popover-contained">
                    <Popover.Title as="h3" className="text-center">{`${user.name || 'Ariel' }`}</Popover.Title>
                    <Popover.Content className="text-center">
                        <p className="mb-1">{user.email || 'gazisagor00000@gmail.com'}</p>
                        <Button variant="danger" onClick={handleLogOut}>Log out</Button>
                    </Popover.Content>
                </Popover>
            </Overlay>
        </div>
    );
};

export default PopOver;