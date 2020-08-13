import React from 'react'
import styled from 'styled-components/macro'
import { v4 as uuid } from 'uuid'
import Button from '../Button/Button'

export default function TodoForm({ onSubmit }) {
  return (
    <Form onSubmit={submitHandler} className="TodoForm">
      <label htmlFor="todo-input">Add todo:</label>
      <div>
        <Input id="todo-input" name="todo" />
        <Button make="add">Add</Button>
      </div>
    </Form>
  )

  function submitHandler(event) {
    event.preventDefault()
    const form = event.target
    const input = form.todo
    const todo = input.value
    onSubmit({ id: uuid(), todo, completed: false })
    form.reset()
  }
}

const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:focus {
    border: none;
    outline: 2px solid;
    border-radius: 5px;
    outline-color: rgba(0, 0, 0, 0.1);
  }
`

const Form = styled.form`
  display: grid;
  margin-bottom: 20px;
`
