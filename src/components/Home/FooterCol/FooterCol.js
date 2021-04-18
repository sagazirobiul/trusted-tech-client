import React from 'react';
import { Link } from 'react-router-dom';
import './FooterCol.css'

const FooterCol = (props) => {
    return (
        <div className="col-md-3 footerLink">
            <h5>{props.title? props.title : ''}</h5>
            {
                props.menuItems.map(({name, id}) => <li><Link to="/" key={id}>{name}</Link></li>)
            }
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;