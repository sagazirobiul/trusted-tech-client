import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../config/firebaseConfig";
import jwt_decode from "jwt-decode";

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const setToken = () => {
  firebase.auth().currentUser.getIdToken(true)
  .then(function(idToken) {
    localStorage.setItem('token', idToken);
  })
}

export const loginWithProvider = (provider) => {
    return firebase.auth().signInWithPopup(provider)
    .then( res => {
        setToken();
        return handleResponse(res);
    }).catch( error  => {
        const message = {
          error: error.message
        }
        return message;
    });
};

export const createAccount = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( res => {
      setToken();
      return handleResponse(res);
    })
    .catch( error  => {
      const message = {
        error: error.message
      }
      return message;
    });
}

export const loginWithEmail = (email, password) =>{
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then( res => {
    setToken();
    return handleResponse(res);
  })
  .catch( error => {
      const message = {
      error: error.message
      }
      return message;
  });
}

const handleResponse = (res) => {
  const {displayName, email, photoURL} = res.user;
  const userInfo = {
    isSignedIn: true,
    name: displayName,
    email: email,
    img: photoURL
  }
  return userInfo;
}

export const getDecodedUser = () => {
  const token = localStorage.getItem('token');
  if (!token) {
      return {};
  }
  const { name, picture, email } = jwt_decode(token);
  const decodedUser = {
      isSignedIn: true,
      name: name,
      email: email,
      img: picture,
  }
  return decodedUser;
}

export const handleSignOut = () => {
  return firebase.auth().signOut()
    .then(() => {
        localStorage.removeItem('token');
        const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            img: ''
        }
        return signedOutUser;
      })
}