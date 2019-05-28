import React from 'react'
import styled from 'styled-components'

import logo from '@/assets/images/logo.svg'

const StyledHeader = styled.header`
  width: 100%;
  padding: 0px 40px;
  font-family: "Hammersmith One", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    text-align: center;
  }
`

const StyledImage = styled.img`
  object-fit: contain;
  height: 185px;

  @media (max-width: 992px) {
    height: 120px;
  }
`

const Header = () => (
  <StyledHeader>
    <StyledImage
      src={logo}
      alt='Luxette logo'
    />
  </StyledHeader>
)

export default Header
