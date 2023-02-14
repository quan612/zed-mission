import React from 'react'

interface CloseIconProps {
  width?: string
  height?: string
}

const CloseIcon: React.FC<CloseIconProps> = ({ width = '14', height = '14' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.2997 0.709727C12.9097 0.319727 12.2797 0.319727 11.8897 0.709727L6.99973 5.58973L2.10973 0.699727C1.71973 0.309727 1.08973 0.309727 0.699727 0.699727C0.309727 1.08973 0.309727 1.71973 0.699727 2.10973L5.58973 6.99973L0.699727 11.8897C0.309727 12.2797 0.309727 12.9097 0.699727 13.2997C1.08973 13.6897 1.71973 13.6897 2.10973 13.2997L6.99973 8.40973L11.8897 13.2997C12.2797 13.6897 12.9097 13.6897 13.2997 13.2997C13.6897 12.9097 13.6897 12.2797 13.2997 11.8897L8.40973 6.99973L13.2997 2.10973C13.6797 1.72973 13.6797 1.08973 13.2997 0.709727Z"
      fill="#F0F8FF"
    />
  </svg>
)

export default CloseIcon
