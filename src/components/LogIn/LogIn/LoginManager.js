import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../config/firebaseConfig";

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const handleToken = (email) => {
    sessionStorage.setItem('email', email)
}

export const loginWithProvider = (user, provider) => {
    return firebase.auth().signInWithPopup(provider)
    .then((result) => {
        const {displayName, email, photoURL} = result.user;
        const newUserInfo = {...user}
        newUserInfo.name = displayName;
        newUserInfo.email = email;
        newUserInfo.img = photoURL;
        handleToken(email)
        return newUserInfo;
    }).catch((error) => {
        const newUserInfo = {...user}
        newUserInfo.error = error.message;
        return newUserInfo;
    });
}