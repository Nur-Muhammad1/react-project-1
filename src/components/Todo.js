import React from "react";

import style from "./todo.module.css";

function Todo({ todo, id, onRemoveTodo }) {
  const { title, desc } = todo;

  const handleClick = (id) => {
    onRemoveTodo(id);
  };

  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <button
        className={style.btn}
        onClick={() => {
          handleClick(id);
        }}
      >
        <i className="fa fa-trash fa-2x" />
      </button>
    </article>
  );
}

export default Todo;
