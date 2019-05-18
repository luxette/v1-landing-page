import React from 'react'
import { string, node } from 'prop-types'

const TestimonialCard = ({ client, children }) => (
  <div className="testimonial-card">
    <p>{children}</p>
    <p className="client">
      - {client}
    </p>
  </div>
)

TestimonialCard.propTypes = {
  client: string.isRequired,
  children: node.isRequired
}

export default TestimonialCard
