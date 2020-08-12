import React from 'react'
import './TodoForm.css'

export default function TodoForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="TodoForm">
      <label htmlFor="todo-input">Add todo:</label>
      <div>
        <input id="todo-input" name="todo" />
        <button>Add</button>
      </div>
    </form>
  )
}
