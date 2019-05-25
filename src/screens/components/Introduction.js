import React from 'react'
import styled from 'styled-components'

import { Title } from '@/style-guide'
import { primary } from '@/style-guide/colors'

const StyledContainer = styled.div`
  background-color: #e7d7d2;
  text-align: center;
  font-family: "Montserrat";
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 30px;

  p {
    color: ${primary};
  }
`

const StyledContent = styled.div`
  width: 665px;
`

const Introduction = () => (
  <StyledContainer>
    <Title>
      Introducing Luxette
    </Title>
    <StyledContent>
      <p>
        The luxury bachelorette planning service that offers brides-to-be the bachelorette of
        their dreams without the stress of planning it.
      </p>
      <p>
        Our expert travel and event planners specialize in the luxury travel & hospitality
        markets of New York City, New Orleans and Napa Valley. We know both the hidden
        gems and the tried-and-true favorites for where to go, see, shop, dine, drink, or be
        pampered in the finest luxury & boutique hotels, homes, boats, and spas.
      </p>
      <p>
        With Luxette, you can expect a curated experience, peace-of-mind, and memories
        to last a lifetime.
      </p>
    </StyledContent>
  </StyledContainer>
)

export default Introduction
