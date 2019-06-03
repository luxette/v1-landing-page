import React from 'react'
import { number, string } from 'prop-types'

const Loading = ({ width = 50, height = 50, color = '#bb7a8c' }) => (
  <svg
    width={`${width}px`}
    height={`${height}px`}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill={color} transform="rotate(269.845 50 51)">
      <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
    </path>
  </svg>
)

Loading.propTypes = {
  width: number,
  height: number,
  color: string
}

export default Loading
