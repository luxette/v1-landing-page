import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

const StyledIcon = styled.img`
  width: 60px;
  margin: 10px 20px;
`

const LinkIcon = ({ alt, img, link }) => (
  <a
    target='_blank'
    rel='noopener noreferrer'
    href={link}
  >
    <StyledIcon alt={alt} src={img} />
  </a>
)

LinkIcon.propTypes = {
  alt: string.isRequired,
  img: string.isRequired,
  link: string.isRequired
}

export default LinkIcon
