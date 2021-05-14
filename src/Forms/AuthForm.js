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
                <p className="login-message">Login to account in order to add/delete or update cars or their details.</p>
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