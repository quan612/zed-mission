import React from 'react'

const SystemUserIcon: React.FC = () => {
  return (
    <svg
      viewBox="0 0 40 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="system-user-icon"
    >
      <path
        d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
        fill="url(#paint0_linear_2682_29390)"
      />
      <g filter="url(#filter0_d_2682_29390)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7955 14.1976C13.7955 15.853 14.2949 17.9235 15.3282 19.6437C15.6346 20.1538 15.9947 20.6351 16.4064 21.0606C16.3733 21.3078 16.3217 21.5053 16.2642 21.6304C16.1949 21.7809 15.8767 21.8106 15.8304 21.8277C15.1839 22.0641 13.4403 22.2005 11.7947 22.6988C10.1478 23.1975 8.45882 24.1123 8.01214 26.1234C7.97138 26.3069 8.03488 26.4976 8.17871 26.6234C9.97723 28.9452 14.2811 32 20.0015 32C25.7218 32 29.9245 28.9816 31.861 26.6234C31.9825 26.4755 32.0259 26.3069 31.9851 26.1234C31.5384 24.1123 29.7004 23.1975 28.0538 22.6988C26.408 22.2003 24.6639 22.0638 24.0199 21.8275C23.9323 21.7951 23.7293 21.7665 23.6571 21.6304C23.599 21.5207 23.4249 21.3373 23.3867 21.1183C23.8218 20.6789 24.2002 20.1768 24.5203 19.6436C25.5532 17.9235 26.0527 15.853 26.0527 14.1976C26.0527 10.7805 23.4533 8.00001 19.9255 8.00001C16.3977 8 13.7955 10.7802 13.7955 14.1976Z"
          fill="#F0F8FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2682_29390"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2682_29390" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2682_29390"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2682_29390"
          x1="-20"
          y1="20"
          x2="20"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2A2E35" />
          <stop offset="1" stopColor="#41464D" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SystemUserIcon
