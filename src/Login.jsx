import React, { useContext } from 'react';
import { user } from './UserContext';

const Login = () => {

    console.log("inside Login",useContext(user))
  return (
    <div>
      
    </div>
  );
}

export default Login;
