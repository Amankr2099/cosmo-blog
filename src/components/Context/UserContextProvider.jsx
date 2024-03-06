import { useEffect, useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children})=>{

    const [user,setUser] = useState(()=>{
        let localUserId = JSON.parse(localStorage.getItem('currentUserId'));
        if (!localUserId) {
            return null;
        }
        return localUserId;
    });

    useEffect(()=>{
        localStorage.setItem('currentUserId',JSON.stringify(user))
    },[user]);

    return(
        <UserContext.Provider
            value={{user,setUser}}
        >
            {children}
        </UserContext.Provider>
    )
}

export {UserContextProvider};