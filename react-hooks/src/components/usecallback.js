import React, { useState,useCallback } from 'react'
import Child from './child.js'
import axios from 'axios';

function usecallback() {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("yo,pls sub to the channel");

    const returnComment = useCallback(
        (name) => {
        return data = name;
    }, 
    [data]);
    return (
        <div>
            <Child returnComment={returnComment} />
            <button onClick={() => {
                setToggle(!toggle);
            }}>
                {""}Toggle
            </button>
            {toggle && <h1>Toggle</h1>}
        </div>
    )
}

export default usecallback
