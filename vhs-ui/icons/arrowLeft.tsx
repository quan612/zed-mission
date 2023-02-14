import React from 'react'
import { string } from 'prop-types'

const ArrowLeft = ({ width, height }) => (
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
      d="m 12.485521,6.09577 h -9.30834 l 2.89167,2.64374 c 0.325,0.325 0.325,0.85833 0,1.18333 -0.325,0.32496 -0.85,0.32496 -1.175,0 L 0.577181,5.85411 c -0.325,-0.325 -0.325,-0.85 0,-1.175 l 4.31667,-3.847916 c 0.325,-0.325 0.85,-0.325 1.175,0 0.325,0.324996 0.325,0.849996 0,1.174996 l -2.89167,2.42292 h 9.30834 c 0.458329,0 0.833329,0.375 0.833329,0.83333 0,0.45833 -0.375,0.83333 -0.833329,0.83333 z"
      fill="#ecf1fb"
      id="path2"
    />
  </svg>
)

ArrowLeft.propTypes = {
  width: string,
  height: string,
}

export default ArrowLeft
