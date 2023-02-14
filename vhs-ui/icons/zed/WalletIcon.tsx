import React from 'react'

const WalletIcon: React.FC = () => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="wallet-icon"
    >
      <path
        d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
        fill="url(#paint0_linear_2752_38792)"
      />
      <g filter="url(#filter0_d_2752_38792)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.0156 14.6429H13.125C12.7797 14.6429 12.5 14.3712 12.5 14.0357C12.5 13.7003 12.7797 13.4286 13.125 13.4286H28.125C28.4703 13.4286 28.75 13.1569 28.75 12.8214C28.75 11.8155 27.9105 11 26.875 11H12.5C11.1191 11 10 12.0872 10 13.4286V25.5714C10 26.9128 11.1191 28 12.5 28H28.0156C29.1102 28 30 27.183 30 26.1786V16.4643C30 15.4598 29.1102 14.6429 28.0156 14.6429ZM26.25 22.5357C25.5598 22.5357 25 21.9919 25 21.3214C25 20.6509 25.5598 20.1071 26.25 20.1071C26.9402 20.1071 27.5 20.6509 27.5 21.3214C27.5 21.9919 26.9402 22.5357 26.25 22.5357Z"
          fill="#F0F8FF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2752_38792"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2752_38792" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2752_38792"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2752_38792"
          x1="-20"
          y1="20"
          x2="20"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D675D" />
          <stop offset="1" stopColor="#395052" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default WalletIcon
