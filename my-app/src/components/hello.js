import React from "react";

const Hello=()=>{
    // return (
    //     <div>
    //         <h1>HELOOOO</h1>
    //     </div>
    // )

return React.createElement('div',{id:"hello"},<h1>HELLLOOOO</h1>)
}

export default Hello