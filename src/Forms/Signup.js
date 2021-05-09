import { useContext, useState } from 'react';
import { Redirect } from 'react-router';

import { AuthContext } from '../Auth';

import { auth } from '../firebase';

export default function Signup(){

    const [info, setInfo] = useState({});
    console.log(info);

    const [flag,setFlag] = useContext(AuthContext);

    const handleChange = (event) => {
        const val = event.target.value;
        const name = event.target.name;

        setInfo((prev) => ({
            ...prev,
            [name]: val
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(info.email,info.password).then(cred => {
            console.log(cred);
            setInfo({});
        })
    }


    return (
        <>
            {flag == true ? <Redirect to='/'/> :
            <>
                <h2 className="title">SIGNUP FOR AN ACCOUNT</h2>
                <form className="form">
                    {/* <label>Name</label>
                    <br></br>
                    <input type="text" placeholder="Enter name..." />

                    <br></br>
                    <br></br> */}

                    <label>Email</label>
                    <br></br>
                    <input type="email" placeholder="Enter email address..." className="form-inputs" name="email" onChange={handleChange} value={info.email || ''} />

                    <br></br>
                    <br></br>

                    <label>Password</label>
                    <br></br>
                    <input type="password" placeholder="Enter password..." className="form-inputs" name="password" onChange={handleChange} value={info.password || ''} />

                    <br></br>
                    <br></br>

                    <div className="login-but-div">
                        <button type="submit" className="signup-but" onClick={handleSubmit}>SIGNUP</button>
                    </div>

                    
                </form>
            </>
            }
        </>
    )
}