import React from 'react'
import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function Todo({ completed, children, onClick, id }) {
  return (
    <ToDo>
      <input data-react={id} defaultChecked={completed} type="checkbox" />
      <span>{children}</span>
      <Button onClick={onClick}>X</Button>
    </ToDo>
  )
}

Todo.defaultProps = {
  completed: true,
  children: 'Martin',
  id: '1',
  onClick: undefined,
}

const ToDo = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  &:nth-child(even) {
    background: rgba(150, 150, 150, 0.1);
  }
`
