import React from 'react'
import styled from 'styled-components'

import { accent2, secondary1 } from '@/style-guide/colors'

const StyledContainer = styled.div`
  height: 110px;
  width: 100%;
  background-color: ${accent2};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Hammersmith One";

  p {
    font-weight: bold;
    color: ${secondary1};
    text-align: center;
    padding: 0 20px;
  }

  a {
    font-weight: bold;
    color: ${secondary1};
    text-decoration: none;
    border-bottom: 2px solid;

    a:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`

const Contact = () => (
  <StyledContainer>
    <p>
      CUSTOM DESTINATIONS ARE AVAILABLE UPON REQUEST.
      CONTACT US <a href='mailto:concierge@luxette.co'>HERE</a>  TO GET STARTED.
    </p>
  </StyledContainer>
)

export default Contact
