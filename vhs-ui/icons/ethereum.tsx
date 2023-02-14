import React from 'react'
import { string } from 'prop-types'

const Ethereum = ({ width, height }) => (
  <svg
    width={width || '14'}
    height={height || '14'}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="matrix(0.63205798,0,0,0.63205798,-0.48795297,-0.26411595)" id="g46">
      <g clipPath="url(#clip0_1482_18532)" id="g22">
        <g opacity="0.7" id="g4">
          <path
            opacity="0.6"
            d="M 11.8459,9.01978 6.01758,11.6705 11.8459,15.1139 17.672,11.6705 Z"
            fill="#ecf1fb"
            id="path2"
          />
        </g>
        <g opacity="0.55" id="g8">
          <path
            opacity="0.45"
            d="m 6.01941,11.6704 5.82829,3.4434 V 2 Z"
            fill="#ecf1fb"
            id="path6"
          />
        </g>
        <g opacity="0.9" id="g12">
          <path
            opacity="0.8"
            d="m 11.8457,2 v 13.1138 l 5.8261,-3.4434 z"
            fill="#ecf1fb"
            id="path10"
          />
        </g>
        <g opacity="0.55" id="g16">
          <path
            opacity="0.45"
            d="m 6.01758,12.7746 5.82832,8.211 V 16.218 Z"
            fill="#ecf1fb"
            id="path14"
          />
        </g>
        <g opacity="0.9" id="g20">
          <path
            opacity="0.8"
            d="m 11.8457,16.218 v 4.7676 l 5.8306,-8.211 z"
            fill="#ecf1fb"
            id="path18"
          />
        </g>
      </g>
    </g>
    <defs id="defs27">
      <clipPath id="clip0_1482_18532">
        <rect id="rect24" transform="translate(6 2)" fill="white" height="19" width="11.6896" />
      </clipPath>
    </defs>
  </svg>
)

Ethereum.propTypes = {
  width: string,
  height: string,
}

export default Ethereum
