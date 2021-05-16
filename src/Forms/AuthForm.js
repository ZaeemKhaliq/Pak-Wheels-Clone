import { useState } from 'react';

import Login from './Login';
import Signup from './Signup';

import './AuthForm.scss';


export default function AuthForm(){

    const [mode,setMode] = useState('login');

    const handleClick = () => {
        if(mode == 'login'){
            setMode('signup');
        }
        else{
            setMode('login');
        }
    }

    return (
        <>
            <div className="auth-form-container">
                <p className="login-message"><span style={{fontWeight:'bolder'}}>NOTE: </span>Admin can add/delete or update cars or their details. Users can post a comment on the car page. By Default you will be signed up as a user.</p>
                <div className="form-container">
                    <div className="form-block">
                        {mode == 'login' ? <Login /> : <Signup/>}
                        <div className="form-footer">
                            <p>{mode == 'login' ? 'Dont have an account?' : 'Already have an account?'}</p>
                            <p onClick={handleClick}>{mode == 'login' ? 'Sign up Now!' : 'Log in'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}