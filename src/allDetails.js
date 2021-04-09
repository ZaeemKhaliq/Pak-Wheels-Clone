import React, { createContext, useContext, useEffect, useState } from 'react';
import {db} from './firebase';
import { ConfirmProvider } from 'material-ui-confirm';

export const CarContext = createContext();

export const AllDetails = (props) =>{

  
    const [allDetails, setAlldetails] = useState([]);
    const [screen,setScreen] = useState(null);

    const changed = () =>{
      setScreen(window.innerWidth);
    }   

    useEffect(() => {

      db.collection("CarDetails")
			.onSnapshot((snapShot)=>{
				setAlldetails(snapShot.docs.map(doc => 
					({
                        id:doc.id,
                        data:doc.data()})
                        ))
					
			})

      window.addEventListener("resize",changed)
        setScreen(window.innerWidth);

    },[]);
    
    return(
        <div>
        <CarContext.Provider value={{value: [allDetails, setAlldetails], value2: [screen,setScreen]}}>
            <ConfirmProvider>
              {props.children}
            </ConfirmProvider>
          </CarContext.Provider>
        
        </div>

    );
}