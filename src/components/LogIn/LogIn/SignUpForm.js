import React from 'react';
import { useForm } from 'react-hook-form';
import { createAccount } from './LoginManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';

const SignUpForm = ({redirect, user, setUser}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = ({email, password}) => {
        createAccount(email, password)
        .then(res => {
            setUser(res);
            redirect();
        })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} class="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div class="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faUser}/></span>
                <input placeholder="Name" {...register("email", { required: true })} />
            </div>
            <div class="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faEnvelope}/></span>
                <input placeholder="Email" {...register("email", { required: true })} />
            </div>
            {errors.email && <span className="text-warning">This field is required</span>}
            <div class="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faLock}/></span>
                <input type="password" placeholder="Password" {...register("password", { required: true })} />
            </div>
            <input className="iBtn" type="submit" value="sign Up"/>
            <p className="social-text">Or Sign up with social account</p>
            <SocialMedia user={user} setUser={setUser} redirect={redirect}/>
        </form>
    );
};

export default SignUpForm;