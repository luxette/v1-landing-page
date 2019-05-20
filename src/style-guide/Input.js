import React from 'react'
import styled from 'styled-components'
import { string, func, object } from 'prop-types'

const StyledInputWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  border: 1px solid black;
  border-radius: 4px;
  border-color: black;
`

const StyledInput = styled.input`
  flex: 1;
  width: 100%;
  height: 38px;
  padding: 0 10px;
  border: 0;
  border-radius: 4px;
  color: black;
  font-size: 14px;
  font-family: "Montserrat";
`

const Input = ({
  placeholder,
  value,
  type,
  onChange,
  style
}) => (
  <StyledInputWrapper style={style}>
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </StyledInputWrapper>
)

Input.propTypes = {
  placeholder: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  style: object,
  type: string,

}

Input.defaultProps = {
  type: 'text',
  value: '',
  style: {}
}

export default Input
