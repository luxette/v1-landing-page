import React from 'react'
import { string, func, object } from 'prop-types'
import styled from 'styled-components'

import { secondary1, primary } from './colors'

const StyledButton = styled.button`
  height: 55px;
  width: 170px;
  background-color: transparent;
  border: 4px solid ${secondary1};
  outline: 0;
  padding: 3px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

const StyledCenter = styled.div`
  background-color: ${secondary1};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    color: ${primary};
    font-weight: bold;
    font-size: 13px;
  }
`

const Button = ({ label, onClick, style }) => (
  <StyledButton
    onClick={onClick}
    style={style}
  >
    <StyledCenter>
      <span>
        {label}
      </span>
    </StyledCenter>
  </StyledButton>
)

Button.propTypes = {
  label: string.isRequired,
  onClick: func,
  style: object
}

export default Button
