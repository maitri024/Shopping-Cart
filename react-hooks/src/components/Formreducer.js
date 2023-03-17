import React, { useReducer } from 'react'

const reduce=(state,action)=>{
    switch(action.type)
    {
        case "increment age":
            return{
                name:state.name,
                age:state.age+1
            };
        case "change name":
            return{
                name:action.nextName,
                age:state.age
            };
        default :
        return{state};
    }

}

function Formreducer() {
    const [state,dispatch]=useReducer(reduce,{name:"maitri",age:21})
  
    function buttonclick(){
        dispatch({type:"increment age"});
    }

    function buttonchange(e){
        dispatch({
            type:"change name",
            nextName:e.target.value
        })
    }
    return (
    <div>
      <h1>Form</h1>
      <input value={state.name} onChange={buttonchange}></input><br></br>
      <button onClick={buttonclick}>Increment Age</button>
      <p>Hello my name is {state.name} and age is {state.age}</p>
    </div>
  )
}

export default Formreducer
