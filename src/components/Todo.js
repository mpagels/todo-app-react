import React from 'react'
import './ToDo.css'

export default function Todo({ completed, children, onClick, id }) {
  return (
    <label className="Todo">
      <input data-react={id} defaultChecked={completed} type="checkbox" />
      {children}
      <button onClick={onClick}>X</button>
    </label>
  )
}
