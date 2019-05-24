import React from 'react'
import styled from 'styled-components'

import banner from '@/assets/images/banner.jpg'

const StyledBanner = styled.div`
  width: 80%;
  position: relative;

  img {
    width: 100%;
    opacity: .7;
    max-height: 800px;
    object-fit: cover;
    object-position: top;
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`

const StyledBannerText = styled.span`
  position: absolute;
  left: 30px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 1.6em;
  letter-spacing: 4px;
`

const StyledBannerFooter = styled.span`
  font-size: 1.4em;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  font-family: "Hammersmith One", sans-serif;
  margin: 30px 0 60px 0;
  color: #e7d7d2;
  text-align: center;
`

const MainImage = () => (
  <>
    <StyledBanner>
      <img src={banner} alt='Luxette banner with a women having a drink' />
      <StyledBannerText>
        <p>The Luxury</p>
        <p>Bachelorette</p>
        <p>Experts</p>
      </StyledBannerText>
    </StyledBanner>
    <StyledBannerFooter>
      BESPOKE. LUXURY. STRESS-FREE. TRAVEL. MEMORIES.
    </StyledBannerFooter>
  </>
)

export default MainImage
