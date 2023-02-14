import React from 'react'

const BreedingIcon: React.FC = () => {
  return (
    <svg
      viewBox="0 0 40 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="breeding-icon"
    >
      <path
        d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
        fill="url(#paint0_linear_2710_27380)"
      />
      <g filter="url(#filter0_d_2710_27380)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 10H14V12C14 13.44 14.68 14.61 15.88 15.78C16.74 16.61 17.89 17.41 19.09 18.2L17.26 19.39C16.27 18.72 15.31 18 14.5 17.21C13.07 15.82 12 14.1 12 12V10ZM26 10H28V12C28 14.1 26.93 15.82 25.5 17.21C24.09 18.59 22.29 19.73 20.54 20.84C18.79 21.96 17.09 23.05 15.88 24.22C14.68 25.39 14 26.56 14 28V30H12V28C12 25.9 13.07 24.18 14.5 22.79C15.91 21.41 17.71 20.27 19.46 19.16C21.21 18.04 22.91 16.95 24.12 15.78C25.32 14.61 26 13.44 26 12V10ZM22.74 20.61C23.73 21.28 24.69 22 25.5 22.79C26.93 24.18 28 25.9 28 28V30H26V28C26 26.56 25.32 25.39 24.12 24.22C23.26 23.39 22.11 22.59 20.91 21.8L22.74 20.61ZM15 11H25V12L24.94 12.5H15.06L15 12V11ZM15.68 14H24.32C24.08 14.34 23.8 14.69 23.42 15.06L22.91 15.5H17.07L16.58 15.06C16.2 14.69 15.92 14.34 15.68 14ZM17.09 24.5H22.93L23.42 24.94C23.8 25.31 24.08 25.66 24.32 26H15.68C15.92 25.66 16.2 25.31 16.58 24.94L17.09 24.5ZM15.06 27.5H24.94L25 28V29H15V28L15.06 27.5Z"
          fill="#F0F8FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2710_27380"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2710_27380" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2710_27380"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2710_27380"
          x1="60"
          y1="20"
          x2="20"
          y2="-20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#383082" />
          <stop offset="1" stopColor="#7F4089" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default BreedingIcon
