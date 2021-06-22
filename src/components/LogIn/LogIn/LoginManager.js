import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../config/firebaseConfig";

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const handleToken = (email) => {
    localStorage.setItem('email', email)
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
};

export const createAccount = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(result => {
      let {email, photoURL} = result.user;
      const userInfo = {
          email: email,
          img: photoURL
      }
      handleToken(email)
      return userInfo;
  })
  .catch((error) => {
    const userInfo = {
      message: error.message
    }
    return userInfo;
  });
}

export const loginWithEmail = (email, password) =>{
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then(result => {
    let {email, photoURL} = result.user;
    const userInfo = {
        email: email,
        img: photoURL
    }
    handleToken(email)
    return userInfo;
  })
  .catch((error) => {
    const userInfo = {
      message: error.message
    }
    return userInfo;
  });
}