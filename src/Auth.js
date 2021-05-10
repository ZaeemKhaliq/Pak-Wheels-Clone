import { createContext, useEffect, useState } from 'react';
import { auth } from './firebase';


export const AuthContext = createContext();

export default function Auth(props){

    const [flag,setFlag] = useState(null);
    
    const [user, setUser] = useState();
    
    useEffect(()=>{

      auth.onAuthStateChanged(user => {
        if(user){
          console.log('User logged in: ',user);
          setFlag(true);
          setUser(user);
        }
        else{
          console.log('User logged out');
          setFlag(false);
          setUser(null);
        }
      });

    },[])
    


    return (
        <AuthContext.Provider value={{val: [flag,setFlag], val1: [user, setUser]}}>
            {props.children}
        </AuthContext.Provider>
    )
}



