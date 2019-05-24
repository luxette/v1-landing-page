import React from 'react'
import styled from 'styled-components'

import { Title, LinkIcon } from '@/style-guide'

import theKnotIcon from '@/assets/images/the-knot-icon.png'
import instagramIcon from '@/assets/images/instagram-icon.png'
import facebookIcon from '@/assets/images/fb-icon.png'
import pinterestIcon from '@/assets/images/pinterest-icon.png'
import emailIcon from '@/assets/images/mail-icon.png'

const StyledContainer = styled.div`
  padding: 20px;
`

const StyledIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`

const Footer = () => (
  <StyledContainer>
    <Title style={{ marginBottom: 60 }}>
      Finding love can be hard, but planning your bachelorette is easy with us.
    </Title>
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
