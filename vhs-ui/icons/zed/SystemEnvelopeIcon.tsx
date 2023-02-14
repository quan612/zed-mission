import React from 'react'

const SystemEnvelopeIcon: React.FC = () => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="system-envelope-icon"
    >
      <path
        d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
        fill="url(#paint0_linear_2710_27364)"
      />
      <g filter="url(#filter0_d_2710_27364)">
        <path
          d="M29.6211 17.4531C29.7734 17.332 30 17.4453 30 17.6367V25.625C30 26.6602 29.1602 27.5 28.125 27.5H11.875C10.8398 27.5 10 26.6602 10 25.625V17.6406C10 17.4453 10.2227 17.3359 10.3789 17.457C11.2539 18.1367 12.4141 19 16.3984 21.8945C17.2227 22.4961 18.6133 23.7617 20 23.7539C21.3945 23.7656 22.8125 22.4727 23.6055 21.8945C27.5898 19 28.7461 18.1328 29.6211 17.4531ZM20 22.5C20.9062 22.5156 22.2109 21.3594 22.8672 20.8828C28.0508 17.1211 28.4453 16.793 29.6406 15.8555C29.8672 15.6797 30 15.4062 30 15.1172V14.375C30 13.3398 29.1602 12.5 28.125 12.5H11.875C10.8398 12.5 10 13.3398 10 14.375V15.1172C10 15.4062 10.1328 15.6758 10.3594 15.8555C11.5547 16.7891 11.9492 17.1211 17.1328 20.8828C17.7891 21.3594 19.0938 22.5156 20 22.5Z"
          fill="#F0F8FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2710_27364"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2710_27364" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2710_27364"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2710_27364"
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

export default SystemEnvelopeIcon
