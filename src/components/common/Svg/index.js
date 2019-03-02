import React from 'react'
import { string, number } from 'prop-types'
export const Svg = ({ d, width, height, strokeWidth }) => (
  <svg
    width={width || 20}
    height={height || 20}
    xmlns='http://www.w3.org/2000/svg'
    viewBox={`0 0 ${width || 20} ${height || 20}`}
  >
    <path
      d={d}
      fill='currentColor'
      fillRule='evenodd'
      stroke-width={strokeWidth || 1}
    />
  </svg>
)

Svg.propTypes = {
  d: string.isRequired,
  width: number,
  height: number
}
export default Svg
