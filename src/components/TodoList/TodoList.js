import React from 'react'
import Todo from '../Todo/Todo'

export default function TodoList({ todos, deleteButton }) {
  return (
    <section className="TodoList">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          onClick={() => deleteButton(todo.id)}
        >
          {todo.todo}
        </Todo>
      ))}
    </section>
  )
}

// TodoList.defaultProps = {
//   todos: [{ completed: true, children: 'Martin', id: '1', onClick: undefined }],
//   deleteButton: undefined,
// }
