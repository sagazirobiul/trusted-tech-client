import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { loginWithProvider } from './LoginManager';
import toast from 'react-hot-toast';

const SocialMedia = ({handleResponse}) => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const ghProvider = new firebase.auth.GithubAuthProvider();
    const handleSignIn = (provider) => {
        const loading = toast.loading('Please wait...');
        loginWithProvider(provider)
        .then(res => {
            if(res.error){
                toast.dismiss(loading);
                toast.error(res.error)
            }
            handleResponse(res)
            toast.dismiss(loading);
        })
    }
    return (
        <div class="social-media">
            <button onClick={() => handleSignIn(googleProvider)} className="social-icon">
                <FontAwesomeIcon icon={faGoogle}/>
            </button>
            <button onClick={() => handleSignIn(fbProvider)} className="social-icon">
                <FontAwesomeIcon icon={faFacebook}/>
            </button>
            <button onClick={() => handleSignIn(ghProvider)} className="social-icon">
                <FontAwesomeIcon icon={faGithub}/>
            </button>
        </div>
    );
};

export default SocialMedia;