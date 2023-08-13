import React, { useState } from 'react'
import './MyTodoList.css'

function MyTodoList() {

    const [inputValue, setInputValue] = useState('')
    const [todoList, setTodoList] = useState([])

    function addTodo(){
        setTodoList([...todoList, inputValue])
        setInputValue('')
    }

    function removeTodo(idx){
        const updateTodo = todoList.filter((el, id) => {
            return idx !== id 
        })
        setTodoList(updateTodo)
    }

    function removeAllTodo(){
        setTodoList([])
    }

  return (
    <div className='todoContainer'>
        <div className="todoInput">
            <input type="text" className='input' placeholder='Enter Your Todo' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
            <button type='submit' className='todoInputBtn' onClick={addTodo}>Add</button>
        </div>

        {
            todoList !== [] && todoList.map((todo, idx)=>{
                return (
                    <div className='todoList'>
                        <li key={idx}>
                            {todo}
                        </li>
                        <button className='removeTodoBtn' onClick={()=>removeTodo(idx)}>Remove</button>
                    </div>
                )
            }) 
        }

        {
            todoList.length >= 2 && <button className='removeAllTodoBtn' onClick={removeAllTodo}>Remove All</button>
        }
    </div>
  )
}

export default MyTodoList
