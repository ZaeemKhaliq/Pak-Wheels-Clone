import { useContext, useRef, useState } from 'react';
import { Redirect, useHistory, useLocation, withRouter } from 'react-router';

import { AuthContext } from '../Auth';

import { auth } from '../firebase';


import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


function Login(){
    const [info, setInfo] = useState({});
    console.log(info);

    const [bool,setBool] = useState(false);

    const { val } = useContext(AuthContext);
    const [flag,setFlag] = val;

    const [error,setError] = useState();
    console.log(error);

    const [errorFlag, setErrorFlag] = useState(false);

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

        let emailField = document.forms["login-form"]["email"].value;
        let passwordField = document.forms["login-form"]["password"].value;

        if(emailField == "" || passwordField == ""){
            alert("Both fields are required!");
        }

        else{
            setBool(true);

            auth.signInWithEmailAndPassword(info.email,info.password).then(cred => {
                console.log(cred.user);
                setInfo({});
                
            }).catch(err => {
                setBool(false);
                setError(err);
                setErrorFlag(true);
            })
        }
        
    }

    return (
        <>
                {flag == true ? <Redirect to='/'/> :
                <> 
                    <h2 className="title">LOGIN TO YOUR ACCOUNT</h2>
                    <form className="form" name="login-form">
                        <div className="field-division">
                            <label>Email</label>
                            <br></br>
                            <input type="email" placeholder="Enter email address..." id="form-inputs" name="email" onChange={handleChange} value={info.email || ''} required />
                        </div>

                        <br></br>
                        <br></br>

                        <div className="field-division">
                            <label>Password</label>
                            <br></br>
                            <input type="password" placeholder="Enter password..." id="form-inputs" name="password" onChange={handleChange} value={info.password || ''} required />
                        </div>

                        <br></br>
                        

                        <div className="error-division">
                            {errorFlag == true ? <p>{error.message}</p> : null}
                        </div>

                        <div className="login-but-div">
                            <Button className="login-but" variant="outlined" onClick={handleClick} type="submit">{bool == false ? 'LOGIN' : <CircularProgress style={{color:'white',width:24,height:24}} />}</Button>
                        </div>

                        
                    </form>
                </>
                }
            
        </>
    );
}

export default withRouter(Login);