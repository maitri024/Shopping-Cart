import React,{useContext} from 'react'
import { AppContext } from './usecontext'

function User({}) {
    const {username}=useContext(AppContext);
  return (
    <div>
      <h1>USER:{username}</h1>
    </div>
  )
}

export default User
