import React, { useReducer, useRef } from 'react'
import './form.css';

const initial = {
    jobid:[],
    job: '',
    jobs: []
}

const Setjob = 'setjob'
const Addjob = 'addjob'
const Deljob = 'deljob'

const setJob = payload => {
    return {
        type: Setjob,
        payload
    }
}
const addJob = payload => {
    return {
        type: Addjob,
        payload
    }
}

const delJob = payload => {
    return {
        type: Deljob,
        payload
    }
}


const reduce = (state, action) => {
    let newState;
    switch (action.type) {
        case Setjob:
            newState = {
                ...state,
                job: action.payload
            };
            break;
        case Addjob:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            };
            break;
        case Deljob:
            const newjob=[...state.jobs]
            newjob.splice(action.payload)

            newState = {
                ...state,
                jobs:newjob
            }
            break;
        default:
            throw new Error("invalid")
    }
    return newState

}

function Todoreducer() {
    const [state, dispatch] = useReducer(reduce, initial)
    const { job, jobs } = state
    const inputRef = useRef()

    const handlesub = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()

    }

    return (
        <div className='container'>
            <h1 className='heading'>TO-DO List</h1>
            <input className='writing' value={job}
                placeholder="enter todo...."
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            ></input>
            <button className='writing' onClick={handlesub}>ADD</button>
            <ul className='listing' style={{listStyleType:"none"}}>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(delJob(index))} style={{cursor:'pointer'}}>  &times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todoreducer
