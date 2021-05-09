import { createContext, useState } from 'react';
import { auth } from './firebase';


export const AuthContext = createContext();

export default function Auth(props){

    const [flag,setFlag] = useState(null);
    console.log(flag);

    auth.onAuthStateChanged(user => {
        if(user){
          console.log('User logged in: ',user);
          setFlag(true);
        }
        else{
          console.log('User logged out');
          setFlag(false);
        }
    });


    return (
        <AuthContext.Provider value={[flag,setFlag]}>
            {props.children}
        </AuthContext.Provider>
    )
}



