import React, { useContext } from 'react';
import { user } from '../UserContext';

const ChildA = () => {

    console.log("inside child A Comp : ",useContext(user))
    const {auth,setAuth}=useContext(user)
    return (
        <div>
            <h1>Child A Component</h1>
            <button onClick={()=>{setAuth({...auth,status:false})}} >Logout</button>
        </div>
    );
}

export default ChildA;
