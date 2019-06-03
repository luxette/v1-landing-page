import React from 'react'
import styled from 'styled-components'
import { string, func, object } from 'prop-types'

const StyledInputWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 16px;
`

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  display: block;
  border: 1px solid black;
  border-radius: 4px;
  border-color: black;
  padding: 0 10px;
  border-radius: 4px;
  color: black;
  font-size: 14px;
  font-family: "Montserrat";
`

const StyledError = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 12px;
  font-family: "Montserrat";
  color: red;
  line-height: 1;
`

const Input = ({
  placeholder,
  value,
  type,
  name,
  error,
  onChange,
  style
}) => (
  <StyledInputWrapper style={style}>
    <StyledInput
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
    { error && <StyledError>{error}</StyledError> }
  </StyledInputWrapper>
)

Input.propTypes = {
  placeholder: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  style: object,
  type: string,
  name: string,
  error: string,
}

Input.defaultProps = {
  type: 'text',
  value: '',
  style: {}
}

export default Input
