import React, { useState } from 'react';
import styles from './Todo.module.css';
import { MdDelete } from "react-icons/md";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodos = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue("");
      return;
    }
    alert("Please enter a todo");
  };

  const deleteAll = () => {
    setTodos([]);
  };

  const deleteSingleTodo = (index) => {
    const filterData = todos.filter((e, i) => index !== i);
    setTodos(filterData);
  };

  const editSingleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = prompt("Edit Todo:", updatedTodos[index]);
    setTodos(updatedTodos);
    setInputValue("");
  };

  return (
    <div className={styles.todoApp}>
      <h1>Todo App</h1>
      <div className={styles.todoInput}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodos}>
          <FaPlusCircle />
        </button>
      </div>
      <div className={styles.todoDeleteAll}>
        <button onClick={deleteAll}>
          <MdDelete />
        </button>
      </div>
      <ul className={styles.todoList}>
        {todos.map((todo, index) => (
          <li key={index} className={styles.todoItem}>
            <p>{todo}</p>
            <div className={styles.todoActions}>
              <FaMinusCircle
                className={styles.deleteIcon}
                onClick={() => deleteSingleTodo(index)}
              />
              <FaPlusCircle
                className={styles.editIcon}
                onClick={() => editSingleTodo(index)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;


