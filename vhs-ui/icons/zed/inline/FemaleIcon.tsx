import React from 'react'
import { IconProps } from '../types'

const FemaleIcon: React.FC<IconProps> = ({ fill }) => {
  return (
    <svg
      data-testid="female-icon"
      viewBox="0 0 24 24"
      fill={fill || '#9452C5'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C15.3137 3 18 5.68629 18 9C18 11.97 15.84 14.44 13 14.92V17H15V19H13V21H11V19H9V17H11V14.92C8.16 14.44 6 11.97 6 9C6 5.68629 8.68629 3 12 3ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z"
      />
    </svg>
  )
}

export default FemaleIcon
