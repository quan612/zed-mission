import React from 'react'
import { IconProps } from '../types'

const MaleIcon: React.FC<IconProps> = ({ fill }) => {
  return (
    <svg
      data-testid="male-icon"
      viewBox="0 0 24 24"
      fill={fill || '#56CCF2'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 9C10.29 9 11.5 9.41 12.47 10.11L17.58 5H13V3H21V11H19V6.41L13.89 11.5C14.59 12.5 15 13.7 15 15C15 18.3137 12.3137 21 9 21C5.68629 21 3 18.3137 3 15C3 11.6863 5.68629 9 9 9ZM9 11C6.79086 11 5 12.7909 5 15C5 17.2091 6.79086 19 9 19C11.2091 19 13 17.2091 13 15C13 12.7909 11.2091 11 9 11Z"
      />
    </svg>
  )
}

export default MaleIcon
