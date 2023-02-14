import React from 'react'
import { string } from 'prop-types'

const ShapeArrow = ({ width, height, fill }) => (
  <svg
    width={width || '9'}
    height={height || '16'}
    viewBox="0 0 9 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.68198 13L1.7677e-05 13L0.44497 12.34L3.31804 8.00001L0.444971 3.66001L1.04333e-07 3L5.68196 3L6.12693 3.66001L9 8.00001L6.12693 12.34L5.68198 13Z"
      fill={fill || '#ECF1FB'}
    />
  </svg>
)

ShapeArrow.propTypes = {
  width: string,
  height: string,
  fill: string,
}

export default ShapeArrow
