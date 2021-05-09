import { useContext, useState } from 'react';
import { Redirect, useHistory, useLocation, withRouter } from 'react-router';

import { AuthContext } from '../Auth';

import { auth } from '../firebase';


import Button from '@material-ui/core/Button';



function Login(){
    const [info, setInfo] = useState({});
    console.log(info);

    const history = useHistory();

    const [flag,setFlag] = useContext(AuthContext);

    const handleChange = (event) => {
        const val = event.target.value;
        const name = event.target.name;

        setInfo((prev) => ({
            ...prev,
            [name]: val
        }))
    }

    

    const handleClick = (event) => {
        event.preventDefault();
        
        auth.signInWithEmailAndPassword(info.email,info.password).then(cred => {
            console.log(cred.user);
            setInfo({});
            
        })
    }

    return (
        <>
                {flag == true ? <Redirect to='/'/> :
                <> 
                    <h2 className="title">LOGIN TO YOUR ACCOUNT</h2>
                    <form className="form">
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
                            <Button className="login-but" variant="outlined" onClick={handleClick}>LOGIN</Button>
                        </div>

                        
                    </form>
                </>
                }
            
        </>
    );
}

export default withRouter(Login);