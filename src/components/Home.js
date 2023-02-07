import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import style from "./home.module.css";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((oldTodos) => {
      return [...oldTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id)=>{
    const filterTodos = todos.filter((todo)=>todo.id !== id);
    setTodos(filterTodos)
  }

  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo addTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  );
};

export default Home;
