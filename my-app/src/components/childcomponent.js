import React from 'react'

 function childcomponent(props){
    return(
        <div>
            <button onClick={()=>props.greetHandler('children')}>Greet Component</button>
        </div>
    )
 }

export default childcomponent
