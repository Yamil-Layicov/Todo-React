import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState,useEffect } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(()=>{
    getLocalTodos();
  },[])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos,status])

  function filterHandler() {  
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case "unCompleted":
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  function saveLocalTodos(){
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  function getLocalTodos(){
    if(localStorage.getItem("todos") == null){
      localStorage.setItem("todos",JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="">
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
    </div>
  );
};

export default App;
