import React from 'react'

const RacingTrophyIcon: React.FC = () => {
  return (
    <svg
      viewBox="0 0 40 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="racing-trophy-icon"
    >
      <path
        d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
        fill="url(#paint0_linear_2710_27401)"
      />
      <g filter="url(#filter0_d_2710_27401)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 10V19C10 20 11 21 12 21H14.2C14.6 23 15.9 24.7 19 25V27.1C16.8 27.3 16 28.4 16 29.7V30H24V29.7C24 28.4 23.2 27.3 21 27.1V25C24.1 24.7 25.4 23 25.8 21H28C29 21 30 20 30 19V10H26C25.1 10 24 11 24 12H16C16 11 14.9 10 14 10H10ZM12 12H14V14V19H12V12ZM26 12H28V19H26V14V12ZM16 14H24V19.5C24 21.43 23.42 23 20 23C16.59 23 16 21.43 16 19.5V14Z"
          fill="#F0F8FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2710_27401"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2710_27401" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2710_27401"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2710_27401"
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

export default RacingTrophyIcon
