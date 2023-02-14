import React from 'react'
import { IconProps } from '../types'

const CopyIcon: React.FC<IconProps> = ({ fill }) => {
  return (
    <svg
      data-testid="copy-icon"
      viewBox="0 0 20 20"
      fill={fill || '#F0F8FF'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6667 17.5002H7.5V5.8335H16.6667M16.6667 4.16683H7.5C6.57952 4.16683 5.83333 4.91302 5.83333 5.8335V17.5002C5.83333 18.4206 6.57952 19.1668 7.5 19.1668H16.6667C17.5871 19.1668 18.3333 18.4206 18.3333 17.5002V5.8335C18.3333 4.91302 17.5871 4.16683 16.6667 4.16683ZM14.1667 0.833496H4.16667C3.24619 0.833496 2.5 1.57969 2.5 2.50016V14.1668H4.16667V2.50016H14.1667V0.833496Z"
      />
    </svg>
  )
}

export default CopyIcon
