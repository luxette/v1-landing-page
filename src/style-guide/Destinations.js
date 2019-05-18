import React from 'react'

import ny from '@/assets/images/newyork.jpg'
import nola from '@/assets/images/neworleans.jpg'
import napa from '@/assets/images/napa.jpg'

import { DestinationCard } from '@/style-guide'

const Destinations = () => (
  <div className="destinations-section">
    <div className="destinations-title">Recommended destinations</div>
    <div className="destination-wrap">
      <DestinationCard img={ny} title="New York" />
      <DestinationCard img={nola} title="New Orleans" />
      <DestinationCard img={napa} title="Napa Valley" />
    </div>
  </div>
)

export default Destinations
