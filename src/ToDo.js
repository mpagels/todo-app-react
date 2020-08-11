import React from "react";
import DeleteToDo from "./DeleteToDo";

export default function ToDo({ todo, finished }) {
  return (
    <li>
      <div className="wrapper">
        <input type="checkbox" checked={finished} id="todo"></input>
        <label htmlFor="todo">{todo}</label>
        <DeleteToDo />
      </div>
    </li>
  );
}
