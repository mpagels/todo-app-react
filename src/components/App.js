import React, { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { v4 as uuid } from 'uuid'

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      todo: 'Coffee',
      completed: true,
    },
  ])

  return (
    <div className="App">
      <TodoForm onSubmit={addToDo} />
      <TodoList todos={todos} deleteButton={deleteToDo} />
    </div>
  )

  function addToDo(event) {
    event.preventDefault()
    const todoObj = {
      id: uuid(),
      todo: event.target[0].value,
      completed: false,
    }
    event.target[0].value !== '' && setTodos([...todos, todoObj])
    event.target[0].value = ''
  }

  function deleteToDo(event) {
    const id = event.target.previousElementSibling.attributes[0].nodeValue
    setTodos(todos.filter((todo) => todo.id !== id))
  }
}
