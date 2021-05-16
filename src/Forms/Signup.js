import { useContext, useState } from 'react';
import { Redirect } from 'react-router';

import { AuthContext } from '../Auth';

import { auth } from '../firebase';
import {db} from '../firebase';
import firebase from 'firebase';

import CircularProgress from '@material-ui/core/CircularProgress';

export default function Signup(){

    const [info, setInfo] = useState({});
    console.log(info);

    const [bool,setBool] = useState(false);

    const { val } = useContext(AuthContext);
    const [flag,setFlag] = val;

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

        let nameField = document.forms["signup-form"]["name"].value;
        let emailField = document.forms["signup-form"]["email"].value;
        let passwordField = document.forms["signup-form"]["password"].value;

        if(nameField == "" || emailField == "" || passwordField == ""){
            alert("All fields are required!");
        }

        else{
            setBool(true);

            auth.createUserWithEmailAndPassword(info.email,info.password).then(cred => {
                console.log(cred);

                db.collection("Users").doc("1").update({
                    user: firebase.firestore.FieldValue.arrayUnion({
                        name: info.name,
                        email: info.email,
                        password: info.password,
                        role: 'user'
                    })
                });

                setInfo({});
            })
        }
        
    }


    return (
        <>
            {flag == true ? <Redirect to='/'/> :
            <>
                <h2 className="title">SIGNUP FOR AN ACCOUNT</h2>
                <p style={{textAlign:'center'}}>You can use any dummy email</p>
                <form className="form" name="signup-form">
                    <label>Name</label>
                    <br></br>
                    <input type="text" placeholder="Enter name..."  id="form-inputs" name="name" onChange={handleChange} value={info.name || ''} required/>

                    <br></br>
                    <br></br>

                    <label>Email</label>
                    <br></br>
                    <input type="email" placeholder="Enter email address..." id="form-inputs" name="email" onChange={handleChange} value={info.email || ''} required/>

                    <br></br>
                    <br></br>

                    <label>Password</label>
                    <br></br>
                    <input type="password" placeholder="Enter password..." id="form-inputs" name="password" onChange={handleChange} value={info.password || ''} required/>

                    <br></br>
                    <br></br>

                    <div className="login-but-div">
                        <button type="submit" className="signup-but" onClick={handleSubmit}>{bool == false ? 'SIGNUP' : <CircularProgress style={{color:'white',width:24,height:24}} />}</button>
                    </div>

                    
                </form>
            </>
            }
        </>
    )
}