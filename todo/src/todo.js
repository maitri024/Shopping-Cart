import React, { useEffect, useState } from 'react'
import './todo.css'


const Todo = () => {
    const [inputlist, setInputlist] = useState("");
    const [items, setItems] = useState([]);

    const itemevent = (e) => {
        setInputlist(e.target.value);
    }

    const listofitems = () => {
        setItems((olditems) => {
            return [...olditems, inputlist]
        });
    }

    const deleteitems = (index) => {
        // console.log("delete item",index)
        const remove = items.filter((itemval, i) =>
            i != index)
        setItems(remove)
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(items));
    }, [items])




    return (
        <div className='wholepage'>
            <div className='center'>
                <h1>TO-DO LIST</h1>
                <input type="text" placeholder='todo items' onChange={itemevent}></input>
                <button onClick={listofitems}>+</button>
                <ul>
                    {items.map((itemval, index) => {
                        return <li key={index}>
                            <span onClick={() => deleteitems(index)}>&times;</span>{itemval}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Todo
