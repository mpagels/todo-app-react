import React from 'react'
import styled, { css } from 'styled-components/macro'

export default function Botton({ children, onClick, make }) {
  return (
    <Button do={make} onClick={onClick}>
      {children}
    </Button>
  )
}

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: salmon;
  border-radius: 15px;
  color: white;

  ${(props) =>
    props.do &&
    css`
      background-color: green;
      height: 20px;
      margin-left: 15px;
    `}
`
