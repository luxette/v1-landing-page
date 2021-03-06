import React from 'react'
import styled from 'styled-components'
import { string, node } from 'prop-types'

import { primary } from './colors'

const StyledContainer = styled.div`
  justify-content: space-around;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 80%;
  font-family: "Montserrat";
  text-align: center;

  @media (min-width: 760px) {
    width: 40%;
    margin: 0 auto;
  }
`

const StyledClient = styled.p`
  font-weight: bold;
  color: ${primary};
`

const TestimonialCard = ({ client, children }) => (
  <StyledContainer>
    <p>{children}</p>
    <StyledClient>
      - {client}
    </StyledClient>
  </StyledContainer>
)

TestimonialCard.propTypes = {
  client: string.isRequired,
  children: node.isRequired
}

export default TestimonialCard
