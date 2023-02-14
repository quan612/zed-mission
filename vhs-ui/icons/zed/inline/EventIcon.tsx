import React from 'react'
import { IconProps } from '../types'

const EventIcon: React.FC<IconProps> = ({ fill }) => {
  return (
    <svg
      data-testid="event-icon"
      viewBox="0 0 24 24"
      fill={fill || '#FFA700'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 6H14.4L14 4H5V21H7V14H12.6L13 16H20V6ZM16 14H14V12H16V14ZM16 10H18V12H16V10ZM16 10V8H14V10L13 8V6H11V8H9V6H7V8H9V10H7V12H9V10H11V12H13V10L14 12V10H16ZM13 10V8H11V10H13Z"
      />
    </svg>
  )
}

export default EventIcon
