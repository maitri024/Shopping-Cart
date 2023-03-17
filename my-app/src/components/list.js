import React from 'react'
import Person from './Person'

function list() {
    const names=["bruce","diana","bruce"]
    const persons = [
        {
            id: 2,
            name: "abc",
            age: 20
        },
        {
            id: 1,
            name: "xyz",
            age: 30
        },
        {
            id: 3,
            name: "lmn",
            age: 25
        }
    ]
    // const namelist = persons.map(person => <Person key={person.id} person={person} />)
    const naming=names.map((name,index)=><h2 key={index}>{index} {name}</h2>)

    return (
        <div>{naming}</div>
    )
}

export default list
