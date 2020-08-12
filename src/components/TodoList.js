import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

export default function TodoList({ todos, deleteButton }) {
  return (
    <section className="TodoList">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          onClick={deleteButton}
        >
          {todo.todo}
        </Todo>
      ))}
    </section>
  );
}
