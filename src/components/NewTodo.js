import React, { useState } from "react";
import style from "./newTodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;
  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: e.target.value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo({title: "", desc: ""});
    props.addTodo(todo);
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="desc">Description:</label>
        <textarea
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={handleChange}
        />
      </div>
      <div className={style["form-field"]}>
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
};

export default NewTodo;
