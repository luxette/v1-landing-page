import React from 'react'
import styled from 'styled-components'

import { accent2, secondary1 } from '@/style-guide/colors'

const StyledContainer = styled.div`
  height: 100px;
  width: 100%;
  background-color: ${accent2};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Hammersmith One";

  p {
    font-weight: bold;
    color: ${secondary1};
  }

  a {
    font-weight: bold;
    color: ${secondary1};
    text-decoration: none;

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
      CONTACT US {' <'}<a href='mailto:concierge@luxette.co'>HERE</a>{'> '}
      TO GET STARTED.
    </p>
  </StyledContainer>
)

export default Contact
