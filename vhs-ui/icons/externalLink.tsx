import React from 'react'
import { string } from 'prop-types'

const ExternalLink = ({ width, height }) => (
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
      d="M8.48141 0.333374V1.81486H11.1407L3.85918 9.09634L4.90363 10.1408L12.1851 2.8593V5.51856H13.6666V0.333374H8.48141ZM12.1851 12.1852H1.81473V1.81486H6.99992V0.333374H1.81473C0.992511 0.333374 0.333252 1.00004 0.333252 1.81486V12.1852C0.333252 13.0034 0.996534 13.6667 1.81473 13.6667H12.1851C13.0033 13.6667 13.6666 13.0034 13.6666 12.1852V7.00004H12.1851V12.1852Z"
      fill="#ECF1FB"
    />
  </svg>
)

ExternalLink.propTypes = {
  width: string,
  height: string,
}

export default ExternalLink
