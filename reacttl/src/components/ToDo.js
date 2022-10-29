import React from 'react'
import Button from '@atlaskit/button';
import styled, { css } from "styled-components";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;

  &,
  &:hover {
    ${(p) =>
      p.isCompleted &&
      css`
        text-decoration: line-through;
      `}
  }

  &:hover {
    .check-icon {
      display: inline-block;
    }
  }

  .check-icon {
    display: none;

    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }
`;

export default function ToDo({todo}) {
  return (
    <div>
        <ButtonStyled shouldFitContainer>{todo.name}</ButtonStyled>
        

    </div>
  )
}
