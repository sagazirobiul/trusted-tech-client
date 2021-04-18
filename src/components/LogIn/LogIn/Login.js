import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../../App"
import { loginWithProvider } from './LoginManager';
import { useHistory, useLocation } from "react-router-dom";
import './Login.css'

const Login = () => {
    const [user, setUser] = useContext(UserContext)
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" }};
    const handleSignIn = (provider) => {
        loginWithProvider(user, provider)
        .then(res => {
            setUser(res);
            history.replace(from);
        })
    }
    return (
        <div className="row">
            <div className="col-md-3 mx-auto">
                <div className="login">
                    <h3>Log In</h3>
                    <button onClick={() => handleSignIn(googleProvider)}>LogIn with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;