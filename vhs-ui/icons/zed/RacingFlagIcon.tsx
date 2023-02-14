import React from 'react'

const RacingFlagIcon: React.FC = () => {
  return (
    <svg
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="racing-flag-icon"
    >
      <path
        d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
        fill="url(#paint0_linear_2710_27392)"
      />
      <g filter="url(#filter0_d_2710_27392)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28 14H22.4L22 12H13V29H15V22H20.6L21 24H28V14ZM24 22H22V20H24V22ZM24 18H26V20H24V18ZM24 18V16H22V18L21 16V14H19V16H17V14H15V16H17V18H15V20H17V18H19V20H21V18L22 20V18H24ZM21 18V16H19V18H21Z"
          fill="#F0F8FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2710_27392"
          x="0"
          y="4"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2710_27392" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2710_27392"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2710_27392"
          x1="60"
          y1="20"
          x2="20"
          y2="-20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B7AB7C" />
          <stop offset="1" stopColor="#BD5A22" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default RacingFlagIcon
