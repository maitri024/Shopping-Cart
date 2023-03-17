import React from "react";

// const Greet = () => {
//     console.log(props)
//     return <h1>Greet hello {props.name} {props.heroName}</h1>
// }

//using desrtucturing props
const Greet = ({ name, heroName }) => {

    return (
        <div>
            <h1>Greet hello {name} a.k.a {heroName}</h1>
        </div>
        )
}

export default Greet