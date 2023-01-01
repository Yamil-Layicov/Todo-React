import React from "react";

const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus
}) => {
  function inputTextHandler(e) {
    setInputText(e.target.value);
  }

  function submitTodoHandler(e) {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: Math.ceil(Math.random() * 10000),
        text: inputText,
        completed: false,
      },
    ]);

    setInputText("");
  }

  function statusHandler(e){
    setStatus(e.target.value)
  }

  return (
    <div>
      <form className="form">
        <input
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          value={inputText}
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
          disabled={!inputText}
        >
          Add
        </button>
        <div className="select">
          <select
            onChange={statusHandler}
            name="todos"
            className="filter-todo"
          >
            <option value="all">All</option>
            <option value="completed">Copleted</option>
            <option value="unCompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
