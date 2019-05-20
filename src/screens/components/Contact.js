import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 80%;
  font-family: "Montserrat";
  text-transform: uppercase;
  text-align: center;
  margin: 60px 0;

  a {
    color: black;
  }
`

const StyledParagraph = styled.div`
  margin: 16px 0;

  span {
    display: block;
  }
`

const Contact = () => (
  <StyledContainer>
    <StyledParagraph>
      <span>NOT INTERESTED IN A BACHELORETTE IN NAPA VALLEY, NEW ORLEANS, OR NEW YORK?</span>
      <span>NO PROBLEM.</span>
    </StyledParagraph>
    <p>
      WE OFFER CUSTOM ITINERARIES IF YOU HAVE ANOTHER CITY IN MIND OR WE CAN
      HELP YOU RESEARCH THE PERFECT GETAWAY SPOT.
    </p>
    <p>
      SEND US AN EMAIL
      {' '}<a href='mailto:concierge@luxette.co'>HERE</a>{' '}
      FOR MORE INFORMATION ON
      CUSTOM PACKAGES & PRICING.
    </p>
  </StyledContainer>
)

export default Contact
