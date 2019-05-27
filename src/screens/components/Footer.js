import React from 'react'
import styled from 'styled-components'

import { LinkIcon } from '@/style-guide'
import { accent2 } from '@/style-guide/colors'

import theKnotIcon from '@/assets/images/the-knot-icon.png'
import instagramIcon from '@/assets/images/instagram-icon.png'
import facebookIcon from '@/assets/images/fb-icon.png'
import pinterestIcon from '@/assets/images/pinterest-icon.png'
import emailIcon from '@/assets/images/mail-icon.png'

const StyledContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledTitle = styled.span`
  font-family: "Hammersmith One";
  color: ${accent2};
  font-weight: bold;
`

const StyledIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = () => (
  <StyledContainer>
    <StyledTitle>
      CHECK US OUT
    </StyledTitle>
    <StyledIconsContainer>
      <LinkIcon
        link='https://www.theknot.com/marketplace/redirect-2024966?utm_source=vendor_website&utm_medium=banner&utm_term=0de677f8-07e1-449d-bd22-03b2a9781c34&utm_campaign=vendor_badge_assets'
        img={theKnotIcon}
        alt='As Seen on The Knot'
      />
      <LinkIcon
        link='https://www.instagram.com/luxettebachco/'
        img={instagramIcon}
        alt='Luxette instagram link'
      />
      <LinkIcon
        link='https://www.facebook.com/luxettebachco/?ref=bookmarks'
        img={facebookIcon}
        alt='Luxette facebook link'
      />
      <LinkIcon
        link='https://pinterest.com/luxettebachco/'
        img={pinterestIcon}
        alt='Luxette Pinterest link'
      />
      <LinkIcon
        link='mailto:concierge@luxette.co'
        img={emailIcon}
        alt='Luxette email link'
      />
    </StyledIconsContainer>
  </StyledContainer>
)

export default Footer
