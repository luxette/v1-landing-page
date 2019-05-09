import React from 'react'
import { string, node } from 'prop-types'

const TestimonialCard = ({ client, children }) => (
  <>
    <p>{children}</p>
    <p className="client">
      - {client}
    </p>
  </>
)

TestimonialCard.propTypes = {
  client: string.isRequired,
  children: node.isRequired
}

export default TestimonialCard
