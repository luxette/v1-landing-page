import React from 'react'
import styled from 'styled-components'

import banner from '@/assets/images/banner.jpg'

import { Button } from '@/style-guide'
import { secondary1 } from '@/style-guide/colors'

const StyledBanner = styled.div`
  width: 80%;
  height: 800px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 100px;

  &::after {
    content: "";
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`

const StyledBannerText = styled.span`
  font-weight: 800;
  text-transform: uppercase;
  font-size: 43px;
  color: ${secondary1};
  letter-spacing: 4px;
  text-align: center;

  @media (max-width: 992px) {
    width: 100%;
    font-size: 22px;
  }
`

const StyledBannerFooter = styled.span`
  font-size: 1.5em;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: "Hammersmith One", sans-serif;
  margin: 60px 0 60px 0;
  font-weight: 600;
  opacity: 1;
  color: ${secondary1};
  text-align: center;
`

const goToBottomPage = () => {
  window.scroll({
    top: 9999,
    left: 0,
    behavior: 'smooth'
  })
}

const Banner = () => (
  <>
    <StyledBanner>
      <StyledBannerText>
        Luxury Bachelorette Experts
      </StyledBannerText>
      <Button
        label='START PLANNING'
        onClick={goToBottomPage}
        style={{ marginTop: 40 }}
      />
    </StyledBanner>
    <StyledBannerFooter>
      BESPOKE. LUXURY. STRESS-FREE. TRAVEL. MEMORIES.
    </StyledBannerFooter>
  </>
)

export default Banner
