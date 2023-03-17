import React, { useEffect, useState } from 'react';
import axios from 'axios';


function useeffect() {
    const[data,setData]=useState("");
    const[count,setCount]=useState(0);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email);
            });
            setTimeout(() => {
                setCount((count) => count + 1);
              }, 1000);
    })

    return (
        <div>
            <h1>hello world{data}{count}</h1>
        </div>
    )
}

export default useeffect
