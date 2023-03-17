import React, { useEffect, useLayoutEffect, useRef } from 'react'

function useeffextlayout() {
    const inputRef=useRef(null);

    useLayoutEffect(()=>{
        console.log(inputRef.current.value)
    },[]);

    useEffect(()=>{
        inputRef.current.value="hello";
    },[]);

  return (
    <div>
      <input ref={inputRef} value="pedro"></input>
    </div>
  )
}

export default useeffextlayout
