import React, { useEffect } from 'react'

function child({returnComment}) {
    useEffect(()=>{
        console.log("function was called");
    },[returnComment])
  return (
    <div>
      {returnComment("pedro")}
    </div>
  )
}

export default child
