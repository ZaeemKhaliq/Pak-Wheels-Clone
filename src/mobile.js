import React, { createContext, useEffect, useState } from 'react'


export const MobContext = createContext();

export function Mobile(props){

    const [screen,setScreen] = useState(null);


    const changed = () =>{
        setScreen(window.innerWidth);
    }


    useEffect(() => {
        window.addEventListener("resize",changed)
        setScreen(window.innerWidth);
    },[])

    return (
        <MobContext.Provider value={[screen,setScreen]}>
            {props.children}
        </MobContext.Provider>
    );
}