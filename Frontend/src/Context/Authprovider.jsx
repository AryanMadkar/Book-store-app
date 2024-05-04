import React, { createContext, useContext, useState } from "react";
export const authcontest = createContext();
export default function Authprovider({ children }) {
    const initialiAuthuser = localStorage.getItem("user")
    const [authUSer,SetAuthUser] = useState(initialiAuthuser?JSON.parse(initialiAuthuser):undefined)
    return(
        <authcontest.Provider value={[authUSer,SetAuthUser]}>
            {children}
        </authcontest.Provider>
    )
}

export const useAuth =()=>useContext(authcontest)
