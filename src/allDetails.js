import React, { createContext, useContext, useEffect, useState } from 'react';
import {db} from './firebase';
import { ConfirmProvider } from 'material-ui-confirm';
import { useDispatch, useSelector } from 'react-redux';
import { storeCar } from './Reducer/CarSlice';

export const CarContext = createContext();

export const AllDetails = (props) =>{

  const dispatch = useDispatch();


  const loadCar = () => {
    return async (dispatch,getState) => {
      db.collection("CarDetails")
			.onSnapshot(async (snapShot)=>{
			    const payload = await mappingCars(snapShot);
          console.log(payload);
					dispatch(storeCar(payload));
			});
      
    }
  };

  const mappingCars =  (snapShot) => {
    return snapShot.docs.map(doc => 
      ({
        id: doc.id,
        data: doc.data()
      }))
  }

  
    const [allDetails, setAlldetails] = useState([]);
    const [screen,setScreen] = useState(null);

    const changed = () =>{
      setScreen(window.innerWidth);
    }   

    useEffect(() => {

      // db.collection("CarDetails")
			// .onSnapshot((snapShot)=>{
			// 	setAlldetails(snapShot.docs.map(doc => 
			// 		({
      //                   id:doc.id,
      //                   data:doc.data()})
      //                   ))
					
			// });


      window.addEventListener("resize",changed)
        setScreen(window.innerWidth);

    },[]);
    

    useEffect(()=>{
      dispatch(loadCar());
    });


    return(
        <div>
        <CarContext.Provider value={{ value2: [screen,setScreen] }}>
            <ConfirmProvider>
              {props.children}
            </ConfirmProvider>
          </CarContext.Provider>
        
        </div>

    );
}