import { createContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext= createContext();

export const AuthContextProvider= ({children})=>{
    const [auth, setAuth]= useState(false);

    const Handlingall= (state)=>{
        setAuth(state);
        if(auth==true)
        {
        <Navigate to="/" replace={true}></Navigate>
        }
    }

    return (<AuthContext.Provider value={{auth, Handlingall}}>{children}</AuthContext.Provider>)
};