import React, { createContext, useContext, useEffect, useState } from 'react';

import {db} from './firebase';

import { ConfirmProvider } from 'material-ui-confirm';

export const CarContext = createContext();

export const AllDetails = (props) =>{

  
    const [allDetails, setAlldetails] = useState([]);
    
    useEffect(() => {

      db.collection("CarDetails")
			.onSnapshot((snapShot)=>{
				setAlldetails(snapShot.docs.map(doc => 
					({
                        id:doc.id,
                        data:doc.data()})
                        ))
					
			})

    },[]);
    
    return(
        <div>
        <CarContext.Provider value={{value: [allDetails, setAlldetails]}}>
            <ConfirmProvider>
              {props.children}
            </ConfirmProvider>
          </CarContext.Provider>
        
        </div>

    );
}