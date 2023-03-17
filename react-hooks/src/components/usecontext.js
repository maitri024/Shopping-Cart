import React, { createContext, useState } from 'react'
import Login from './Login.js'
import User from './User.js'

export const AppContext=createContext();

function usecontext() {
    const[username,setUsername]=useState("");

    return (
    <AppContext.Provider value={{username,setUsername}}>
     
      <Login />
      <User />
      
    </AppContext.Provider>
  );
}

export default usecontext;
