import React from 'react'
import styled from 'styled-components'

import logo from '@/assets/images/logo.png'

const StyledHeader = styled.header`
  width: 100%;
  padding: 20px 40px;
  font-family: "Hammersmith One", sans-serif;
  @media (min-width: 768px) {
    text-align: center;
  }
`

const StyledImage = styled.img`
  width: 475px;
  object-fit: contain;
`

const Header = () => (
  <StyledHeader>
    <StyledImage src={logo} alt='Luxette logo' />
  </StyledHeader>
)

export default Header
