import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Form.css'
import "firebase/auth";
import log from '../../../image/log.svg';
import desk from '../../../image/register.svg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';


const Form = () => {
  const [isSignUp, setSignUp] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" }};
  const redirect = () => {
      history.replace(from);
  }
  return (
    <div className={`${ isSignUp ? "fContainer sign-up-mode" : "fContainer"}`}>
        <Link to="/">
          <span className="pageCloseBtn"><FontAwesomeIcon icon={faTimes} /></span>
        </Link>
       <div className="forms-container">
         <div className="signIn-singUp">
            <SignInForm redirect={redirect} user={user} setUser={setUser}/>
            <SignUpForm redirect={redirect} user={user} setUser={setUser}/>
         </div>
       </div>

       <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae quas magnam!</p>
              <button className="iBtn transparent" onClick={() => setSignUp(true)}>Sign Up</button>
            </div>
            <img src={`${log}`} alt="" className="pImg"/>
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae quas magnam!</p>
              <button className="iBtn transparent" onClick={() => setSignUp(false)}>Sign In</button>
            </div>
            <img src={`${desk}`} alt="" className="pImg"/>
          </div>
       </div>
    </div>
  );
};

export default Form;