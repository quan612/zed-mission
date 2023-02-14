import React from 'react'
import { IconProps } from '../types'

const MarketplaceHammerIcon: React.FC<IconProps> = ({ fill }) => {
  return (
    <svg
      data-testid="marketplace-hammer-icon"
      viewBox="0 0 24 24"
      fill={fill || '#F0F8FF'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.2381 5.95349L11.2857 2L13.4286 4.09302L12.4762 5.02326L16.5238 8.97674L17.4762 8.04651L19.619 10.1395L15.5714 14.093L13.4286 12L14.381 11.0698L10.3333 7.11628L9.38095 8.04651L7.2381 5.95349ZM2 17.1163L10.6086 8.70785L12.7515 10.8009L4.14286 19.2093L2 17.1163ZM12.7143 18.2791H20.8095V15.9535H12.7143V18.2791ZM11.5238 21.5349V19.2093H22V21.5349H11.5238Z"
        fillOpacity="0.64"
      />
    </svg>
  )
}

export default MarketplaceHammerIcon
