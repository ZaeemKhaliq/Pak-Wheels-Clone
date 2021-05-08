import { auth } from './firebase';

export default function Auth(){

    auth.onAuthStateChanged(user => {
        if(user){
          console.log('User logged in: ',user);
        }
        else{
          console.log('User logged out');
        }
    });

    
    return (
        <>
        </>
    )
}

