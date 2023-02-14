import React from 'react'

interface EthereumIconProps {
  height?: string
  width?: string
}

const EthereumIcon: React.FC<EthereumIconProps> = ({ height, width }) => {
  return (
    <svg
      height={height || '16'}
      width={width || '16'}
      viewBox="0 0 16 16"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="ethereum-icon"
    >
      <g clipPath="url(#clip0_2911_43021)">
        <g opacity="0.7">
          <path
            opacity="0.6"
            d="M7.92273 5.91113L3.01465 8.14331L7.92273 11.043L12.8289 8.14331L7.92273 5.91113Z"
          />
        </g>
        <g opacity="0.55">
          <path opacity="0.45" d="M3.0166 8.14348L7.92467 11.0432V0L3.0166 8.14348Z" />
        </g>
        <g opacity="0.9">
          <path opacity="0.8" d="M7.92285 0V11.0432L12.829 8.14348L7.92285 0Z" />
        </g>
        <g opacity="0.55">
          <path opacity="0.45" d="M3.01465 9.07324L7.92272 15.9878V11.973L3.01465 9.07324Z" />
        </g>
        <g opacity="0.9">
          <path opacity="0.8" d="M7.92285 11.973V15.9878L12.8328 9.07324L7.92285 11.973Z" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2911_43021">
          <rect width="9.84384" height="16" transform="translate(3)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default EthereumIcon
