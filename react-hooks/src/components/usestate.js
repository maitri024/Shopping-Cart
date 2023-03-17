import React, { useState } from 'react'

// const StateTutorial=()=>{
//     const[counter,setCounter]=useState(0);

//     const increment=()=>{
//        setCounter(counter+1);
//     }
//     return <div> {counter} 
//     <button onClick={increment}>Increment</button></div>
// }

// const StateTutorial = () => {
//     const [inputvalue, setinputvalue] = useState("pedro");

//     let onchange = (e) => {
//         const newval = e.target.value;
//         setinputvalue(newval);
//     }

//     return <div>
//         <input placeholder='enter something' onChange={onchange}></input>
//         {inputvalue}
//     </div>
// }

function StateTutorial() {
    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });
  
    const updateColor = () => {
      setCar(previousState => {
        return { ...previousState, color: "blue" }
      });
    }
  
    return (
      <>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button
          type="button"
          onClick={updateColor}
        >Blue</button>
      </>
    )
}

export default StateTutorial
