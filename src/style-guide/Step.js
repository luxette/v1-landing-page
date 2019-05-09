import React from 'react'
import { string, bool } from 'prop-types'

const Step = ({ icon, title, body, small }) => (
  <div className="step">
    <div className="step-image-container">
      <img
        className={`${small ? "small-icon" : "step-icon"}`}
        src={icon}
        alt="step"
      />
    </div>
    <div className="step-title">{title}</div>
    <p className="step-body">{body}</p>
  </div>
)

Step.propTypes = {
  icon: string.isRequired,
  title: string.isRequired,
  body: string.isRequired,
  small: bool
}

export default Step
