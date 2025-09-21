import React from "react";

import Todo from "./Todo";
import style from "./todos.module.css";

function Todos({ todos, onRemoveTodo }) {
  return (
    <section className={style.todos}>
      {todos.map((todo) => (
        <Todo
          todo={todo.todo}
          key={todo.id}
          id={todo.id}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </section>
  );
}

export default Todos;
