import React from 'react'
import { string } from 'prop-types'

const ArrowRight = ({ width, height }) => (
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
      d="M1.16676 6.09577L10.4751 6.09577L7.58343 8.73951C7.25843 9.06451 7.25843 9.59784 7.58343 9.92284C7.90843 10.2478 8.43343 10.2478 8.75843 9.92284L13.0751 5.85411C13.4001 5.52911 13.4001 5.00411 13.0751 4.67911L8.75843 0.831194C8.43343 0.506194 7.90843 0.506194 7.58343 0.831194C7.25843 1.15619 7.25843 1.68119 7.58343 2.00619L10.4751 4.42911L1.16676 4.42911C0.708431 4.42911 0.333431 4.80411 0.333431 5.26244C0.333431 5.72077 0.708431 6.09577 1.16676 6.09577Z"
      fill="#ECF1FB"
      id="path2"
    />
  </svg>
)

ArrowRight.propTypes = {
  width: string,
  height: string,
}

export default ArrowRight
