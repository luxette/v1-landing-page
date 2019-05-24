import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 80%;
  font-family: "Hammersmith One";
  color: #bb7a8c;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.4em;
  margin: 60px 0;

  // a {
  //   color: black;
  // }
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
      <span>CUSTOM DESTINATIONS AVAILABLE UPON REQUEST.</span>
    </StyledParagraph>
    <p>
      CONTACT US
      {' '}<a href='mailto:concierge@luxette.co'>HERE</a>{' '}
      TO GET STARTED
    </p>
  </StyledContainer>
)

export default Contact
