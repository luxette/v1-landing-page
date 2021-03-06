import React from 'react'
import { string, bool, node } from 'prop-types'
import styled from 'styled-components'

import { accent2 } from './colors'

const StyledContainer = styled.div`
  justify-content: space-around;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 80%;
  font-family: "Montserrat";
  text-align: center;
  @media (min-width: 768px) {
    width: 40%;
  }
`

const StyledIcon = styled.img`
  margin-top: 20px;
  width: ${({ small }) => small ? 80 : 140}px;
`

const StyledTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  margin: 20px 0px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${accent2};
`

const StyledBody = styled.div`
  font-size: 1em;
  padding: 20px;
`

const Step = ({ icon, title, children, small }) => (
  <StyledContainer>
    <StyledIcon src={icon} alt="step" small={small} />
    <StyledTitle>{title}</StyledTitle>
    <StyledBody>{children}</StyledBody>
  </StyledContainer>
)

Step.propTypes = {
  icon: string.isRequired,
  title: string.isRequired,
  children: node.isRequired,
  small: bool
}

export default Step
