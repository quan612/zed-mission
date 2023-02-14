import React from 'react'
import { string } from 'prop-types'

const ArrowUp = ({ width, height }) => (
  <svg
    width={width || '14'}
    height={height || '14'}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.91796 13.1016C7.91796 13.5957 7.5028 14 6.99539 14C6.48797 14 6.07282 13.5957 6.07282 13.1016V3.06594L1.57068 7.45035C1.21087 7.80074 0.629654 7.80074 0.269852 7.45035C-0.0899506 7.09995 -0.0899506 6.53393 0.269852 6.18354L6.34959 0.262795C6.70939 -0.0875983 7.29061 -0.0875983 7.65041 0.262795L13.7301 6.18354C14.09 6.53393 14.09 7.09995 13.7301 7.45035C13.3703 7.80074 12.7799 7.80074 12.4201 7.45035L7.91796 3.06594V13.1016Z"
      fill="#F0F8FF"
    />
  </svg>
)

ArrowUp.propTypes = {
  width: string,
  height: string,
}

export default ArrowUp
