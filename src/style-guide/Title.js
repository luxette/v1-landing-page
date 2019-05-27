import React from 'react'
import styled from 'styled-components'
import { node, object } from 'prop-types'

const StyledTitle = styled.span`
  font-family: "Playfair Display", sans-serif;
  font-size: 26px;
  text-align: center;
  text-transform: uppercase;
  color: #112d30;
  line-height: normal;
`

const Title = ({ children, style }) => (
  <StyledTitle style={style}>
    {children}
  </StyledTitle>
)

Title.propTypes = {
  children: node.isRequired,
  style: object
}

Title.defaultProps = {
  style: {}
}

export default Title
