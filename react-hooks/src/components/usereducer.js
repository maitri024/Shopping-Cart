import React, { useReducer, useState } from "react";

// const reducer=(state,action)=>{
// switch(action.type){
//     case "INCREMENT":
//         return{count:state.count+1,showtext:state.showtext}
//     case "toggleshowtext":
//         return{count:state.count,showtext:!state.showtext}
//     default:
//         return state;
// }
// }
// function Reducee(){
//         const[state,dispatch]=useReducer(reducer,{count:0,showtext:true})

//         return <div>
//             <h1>{state.count}</h1>
//             <button 
//             onClick={()=>{
//                 dispatch({type:"INCREMENT"});
//                 dispatch({type:"toggleshowtext"})
//             }}
//             >Click Here</button>
//             {state.showtext && <p>This is text</p>}
//         </div>
//     }

const reducer = (state, action) => {
    if (action.type === 'incremented_age') {
        return {
            age: state.age + 1
        };
    }
    throw Error('Unknown action.');
}


function Reducee() {
    const [state, dispatch] = useReducer(reducer, { age: 42 });

    return (
        <>
            <button onClick={() => {
                dispatch({ type: 'incremented_age' })
            }}>
                Increment age
            </button>
            <p>Hello! You are {state.age}.</p>
        </>
    );
}


export default Reducee