import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'

function usememo() {
    const[data,setData]=useState(null);
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data);
        })
    })
    const findlongname=(comments)=>{
        if(!comments) return null;

        let longName="";
        for(let i=0;i<comments.length;i++)
        {
            let currentname=comments[i].name;
            if(currentname.length > longName.length)
            {
                longName=currentname;
            }
        }
        console.log(longName)
        return longName;
    }

    const getLongname=useMemo(()=>findlongname(data),[data])
  return (
    <div>
        <h1>{getLongname}</h1>
      
    </div>
  )
}

export default usememo
