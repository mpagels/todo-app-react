import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import { v4 as uuid } from "uuid";
import styled from "styled-components/macro";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      todo: "Coffee",
      completed: true,
    },
  ]);

  return (
    <div className="App">
      <TodoForm onSubmit={addToDo} />
      <TodoList todos={todos} deleteButton={deleteToDo} />
    </div>
  );

  function addToDo(todo) {
    setTodos([...todos, todo]);
  }

  function deleteToDo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
}

const div = styled.div``;

// addToDo in handleSubmit ändern
/* event.target[0].value ändern in
const form = event.target
const input = form.todo
const text = input.value */

// seperation of concerns -> logic, die die App nicht interessiert,
// in die Componente auslagern
/* addToDo bekommt dann nur ein todo, 
addToDo wird reingereicht und das 
todo extrahiert dann die Componente */
