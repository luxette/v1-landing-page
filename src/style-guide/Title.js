import React from 'react'
import styled from 'styled-components'
import { node, object } from 'prop-types'

const StyledTitle = styled.div`
  font-family: "Hammersmith One", sans-serif;
  font-size: 1.8em;
  text-align: center;
  color: #112d30;
  font-weight: bold;
  margin: 50px 20px 30px 20px;
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
