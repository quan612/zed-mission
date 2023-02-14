import React from 'react'

const Marketplace: React.FC = () => {
  return (
    <svg
      viewBox="0 0 40 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="marketplace-icon"
    >
      <path
        d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
        fill="url(#paint0_linear_2710_27375)"
      />
      <g filter="url(#filter0_d_2710_27375)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.2381 13.9535L19.2857 10L21.4286 12.093L20.4762 13.0233L24.5238 16.9767L25.4762 16.0465L27.619 18.1395L23.5714 22.093L21.4286 20L22.381 19.0698L18.3333 15.1163L17.381 16.0465L15.2381 13.9535ZM10 25.1163L18.6086 16.7078L20.7515 18.8009L12.1429 27.2093L10 25.1163ZM20.7143 26.2791H28.8095V23.9535H20.7143V26.2791ZM19.5238 29.5349V27.2093H30V29.5349H19.5238Z"
          fill="#F0F8FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2710_27375"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2710_27375" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2710_27375"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2710_27375"
          x1="-20"
          y1="20"
          x2="20"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5871B0" />
          <stop offset="1" stopColor="#6CA3A4" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Marketplace
