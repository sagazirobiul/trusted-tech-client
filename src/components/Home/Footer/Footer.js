import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css'

const Footer = () => {
    const usefulLink = [
        {name: 'Home', id: 1},
        {name: 'About us', id: 2},
        {name: 'Service', id: 3},
        {name: 'Terms of service', id: 4},
        {name: 'Privacy policy', id: 5}
    ]
    const ourServices = [
        {name: 'Web Design', id: 6},
        {name: 'About us', id: 7},
        {name: 'Web Development', id: 8},
        {name: 'Product Management', id: 9},
        {name: 'Graphic Design', id: 10}
    ]
    const contactUs = [
        {name: 'A107 Limai Street', id: 11},
        {name: 'Bnani, Dhaka', id: 12},
        {name: 'Bangladesh', id: 13},
    ]
    const socialLink = [
        {name: 'Connect With us', id: 16}
    ]
    return (
        <div class='row footer w-100 mt-5 pt-5'>
            <div className="row col-md-11 mx-auto">
                <FooterCol key="1" menuItems={usefulLink} title="USEFUL LINK"/>
                <FooterCol key="2" menuItems={ourServices} title="OUR SERVICES"/>
                <FooterCol key="3" menuItems={contactUs} title="CONTACT US"/>
                <FooterCol key="4" menuItems={socialLink} title="SOCIAL LINK">
                    <p className="text-white fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate quod facere quas rem quaerat.</p>
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faFacebook} className="linkIcon"/>
                        <FontAwesomeIcon icon={faGoogle} className="linkIcon"/>
                        <FontAwesomeIcon icon={faTwitter} className="linkIcon"/>
                    </div>
                </FooterCol>
            </div>
        </div>
    );
};

export default Footer;