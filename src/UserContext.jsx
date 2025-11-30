import React, { useState } from 'react';
import { createContext } from 'react';

export const user = createContext()

const UserContext = ({children}) => {

    const [auth,setAuth] = useState({id:"",email:"",token:"",status:""})
    const [role,setRole] = useState(1987)

    return (
       <user.Provider value={{auth,setAuth,role,setRole}}>
        {children}
       </user.Provider>
    );
}

export default UserContext;
