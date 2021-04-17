import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../../App"
import { loginWithProvider } from './LoginManager';

const Login = () => {
    const [user, setUser] = useContext(UserContext)
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = (provider) => {
        loginWithProvider(user, provider)
        .then(res => {
            setUser(res);
        })
    }
    return (
        <div>
            <h3>log In</h3>
            <button onClick={() => handleSignIn(googleProvider)}>LogIn with google</button>
        </div>
    );
};

export default Login;