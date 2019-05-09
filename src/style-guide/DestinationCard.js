import React from 'react'
import { string } from 'prop-types'

const DestinationCard = ({ img, title }) => (
  <div className="destination">
    <div className="destination-img-container">
      <img className="destination-img" src={img} alt="alt" />
    </div>
    <div className="destination-name">{title}</div>
  </div>
)

DestinationCard.propTypes = {
  img: string.isRequired,
  title: string.isRequired
}

export default DestinationCard
