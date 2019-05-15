import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  background-color: #edeff2;
  text-align: center;
  font-family: "Montserrat";

  p {
    margin: 30px 0;
  }
`

const StyledTitle = styled.p`
  text-transform: uppercase;
  font-family: "Hammersmith One", sans-serif;
  font-size: 1.2em;
`

const Introduction = () => (
  <StyledContainer>
    <StyledTitle>Introducing Luxette</StyledTitle>
    <p>
      The luxury bachelorette planning service that offers brides-to-be the
      bachelorette of their dreams without the stress of planning it.
    </p>
    <p>
      Our travel & event planners specialize in the New York City, New Orleans
      and Napa luxury hospitality markets. They know both the hidden gems and
      the tried-and-true favorites for where to go, see, shop, dine, drink, or
      be pampered in the finest luxury & boutique hotels, homes, boats, and
      spas.
    </p>
    <p>
      With Luxette, you can expect a curated experience, peace-of-mind, and
      memories to last a lifetime.
    </p>
  </StyledContainer>
)

export default Introduction
