import React, { useRef,useContext } from 'react'
import { AppContext } from './usecontext'

function Login({}) {
  const {setUsername}=useContext(AppContext)
  return (
    <div>
      <input onChange={(e)=>{
        setUsername(e.target.value)
      }}></input>
    </div>
  )
}

export default Login
