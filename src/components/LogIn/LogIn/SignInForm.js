import React from 'react';
import { useForm } from 'react-hook-form';
import { loginWithEmail } from './LoginManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';

const SignInForm = ({redirect, user, setUser}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = ({email, password}) => {
        loginWithEmail(email, password)
        .then(res => {
            setUser(res);
            redirect();
        })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faEnvelope}/></span>
                <input placeholder="Email" {...register("email", { required: true })} />
            </div>
            {errors.email && <span className="text-warning">This field is required</span>}
            <div class="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faLock}/></span>
                <input type="password" placeholder="Password" {...register("password", { required: true })} />
            </div>
            {errors.password && <span className="text-warning">This field is required</span>}
            <input className="iBtn" type="submit" value="sign In"/>
            <p class="social-text">Or Sign in with social platforms</p>
            <SocialMedia user={user} setUser={setUser} redirect={redirect}/>
        </form>
    );
};

export default SignInForm;