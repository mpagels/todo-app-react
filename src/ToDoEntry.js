import React from "react";
import "./ToDoEntry.css";
import SubmitToDo from "./SubmitToDo";
import ToDo from "./ToDo";

export default function ToDoEntry() {
  return (
    <div>
      <div className="wrapper">
        <input></input>
        <SubmitToDo />
      </div>
      <ul>
        <ToDo todo="Make a first To Do" />
        <ToDo finished todo="Mark a To Do as finished " />
      </ul>
    </div>
  );
}
