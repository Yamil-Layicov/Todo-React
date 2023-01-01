import React from 'react'

const Todo = ({text,setTodos,todos,todo,setInputText}) => {

    function deleteHandler(){
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    function completeHandler(){
        setTodos(todos.map(el => {
            if(el.id === todo.id){
                return {...el,completed:!el.completed}
            }else{
               return el
            }
        }))
    }

    function editHandler(){
       const editTodo = todos.find(el => el.id === todo.id)
       setInputText(editTodo)
    }

  return (
    <div>
        <div className='todo'>
            <li onClick={completeHandler} className={`todo-item ${todo.completed ? "underline" : ""}`}>{text}</li>
            <button className='completed-btn' onClick={deleteHandler}>Del</button>
            <button className='trash-btn' onClick={editHandler}>Edit</button>
        </div>
    </div>
  )
}

export default Todo