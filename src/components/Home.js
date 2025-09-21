import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import NewTodo from "./NewTodo";
import Todos from "./Todos";
import style from "./home.module.css";

function Home() {
  const [todos, setTodos] = useState([]);

  const handleTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: "White" }}>Todo App</h1>
      <NewTodo onAddTodo={handleTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
}

export default Home;
